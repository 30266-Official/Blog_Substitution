/// <reference lib="es2017" />
/// <reference lib="dom" />

import { eventHandler, getQuery } from 'h3';
interface SimplePingResult {
    success: boolean;
    statusCode?: number;
    responseTime: number;
    error?: string;
}
const defaultUrl = "https://www.baidu.com";//若前端未指定URL，则使用此默认URL
async function simplePing(url: string): Promise<SimplePingResult> {
    const startTime = Date.now();
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const response = await fetch(url, {
            method: 'HEAD',
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const responseTime = Date.now() - startTime;
        return {
            success: response.ok, // status 200-299
            statusCode: response.status,
            responseTime
        };

    } catch (error) {
        const responseTime = Date.now() - startTime;
        return {
            success: false,
            responseTime,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
export default eventHandler(async (event) => {
    const q = getQuery(event) as Record<string, string | undefined>;
    const target = (q.url && String(q.url)) || defaultUrl;
    const result = await simplePing(target);
    //返回结果
    return {
        url: target,
        statusCode: result.statusCode ?? 0,
        responseTime: result.responseTime,
        success: result.success,
        error: result.error ?? null
    };
});