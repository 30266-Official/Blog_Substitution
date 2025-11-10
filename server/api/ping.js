"use strict";
/// <reference lib="es2017" />
/// <reference lib="dom" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var h3_1 = require("h3");
var defaultUrl = "https://www.baidu.com";
function simplePing(url) {
    return __awaiter(this, void 0, void 0, function () {
        var startTime, controller_1, timeoutId, response, responseTime, error_1, responseTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startTime = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    controller_1 = new AbortController();
                    timeoutId = setTimeout(function () { return controller_1.abort(); }, 3000);
                    return [4 /*yield*/, fetch(url, {
                            method: 'HEAD', // 关键：使用HEAD方法减少数据传输
                            signal: controller_1.signal
                        })];
                case 2:
                    response = _a.sent();
                    // 3. 清理超时并计算时间
                    clearTimeout(timeoutId);
                    responseTime = Date.now() - startTime;
                    // 4. 返回结果
                    console.log(response.ok, response.status, responseTime);
                    return [2 /*return*/, {
                            success: response.ok, // status 200-299
                            statusCode: response.status,
                            responseTime: responseTime
                        }];
                case 3:
                    error_1 = _a.sent();
                    responseTime = Date.now() - startTime;
                    return [2 /*return*/, {
                            success: false,
                            responseTime: responseTime,
                            error: error_1 instanceof Error ? error_1.message : 'Unknown error'
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = (0, h3_1.eventHandler)(function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var q, target, result;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                q = (0, h3_1.getQuery)(event);
                target = (q.url && String(q.url)) || defaultUrl;
                return [4 /*yield*/, simplePing(target)];
            case 1:
                result = _c.sent();
                // 返回包含状态码与响应时间的 JSON（供前端/监控使用）
                return [2 /*return*/, {
                        statusCode: (_a = result.statusCode) !== null && _a !== void 0 ? _a : 0,
                        responseTime: result.responseTime,
                        success: result.success,
                        error: (_b = result.error) !== null && _b !== void 0 ? _b : null
                    }];
        }
    });
}); });
