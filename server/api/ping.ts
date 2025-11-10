/// <reference lib="es2017" />
/// <reference lib="dom" />

import { eventHandler, getQuery } from 'h3';
interface SimplePingResult {
    success: boolean;
    statusCode?: number;
    responseTime: number;
    error?: string;
}
const defaultUrl = "https://www.baidu.com";
async function simplePing(url: string): Promise<SimplePingResult> {
    const startTime = Date.now();
    try {
        // 1. 准备请求配置
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        // 2. 发送HTTP请求
        const response = await fetch(url, {
            method: 'HEAD', // 关键：使用HEAD方法减少数据传输
            signal: controller.signal
        });

        // 3. 清理超时并计算时间
        clearTimeout(timeoutId);
        const responseTime = Date.now() - startTime;

        // 4. 返回结果
        console.log(response.ok, response.status, responseTime);
        return {
            success: response.ok, // status 200-299
            statusCode: response.status,
            responseTime
        };

    } catch (error) {
        // 5. 错误处理
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

    // 返回包含状态码与响应时间的 JSON（供前端/监控使用）
    return {
        statusCode: result.statusCode ?? 0,
        responseTime: result.responseTime,
        success: result.success,
        error: result.error ?? null
    };
});
