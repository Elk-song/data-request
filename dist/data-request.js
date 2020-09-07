"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataRequest = /** @class */ (function () {
    function DataRequest(_request) {
        this.request = _request;
    }
    DataRequest.Inst = function (_request) {
        if (typeof this.inst === "undefined") {
            this.inst = new DataRequest(_request);
        }
        return this.inst;
    };
    //#region 
    /**
     * @description get请求
     * @template R 返回数据类型
     * @template T params参数类型
     * @param {string} _url 接口url
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    DataRequest.prototype.getRequest = function (_url, _params, _timeout) {
        return this.getOrDeleteRequest(_url, _params, "get", _timeout);
    };
    /**
     * @description delete请求
     * @template R 返回数据类型
     * @template T params参数类型
     * @param {string} _url 接口url
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    DataRequest.prototype.deleteRequest = function (_url, _params, _timeout) {
        return this.getOrDeleteRequest(_url, _params, "delete", _timeout);
    };
    /**
     * @description post请求
     * @template R  返回数据类型
     * @template D  data数据类型
     * @template T  params参数类型
     * @param {string} _url 接口url
     * @param {D} _data body传值
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    DataRequest.prototype.postRequest = function (_url, _data, _params, _timeout) {
        return this.pRequest(_url, "post", _data, _params, _timeout);
    };
    /**
     * @description put请求
     * @template R  返回数据类型
     * @template D  data数据类型
     * @template T  params参数类型
     * @param {string} _url 接口url
     * @param {D} _data body传值
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    DataRequest.prototype.putRequest = function (_url, _data, _params, _timeout) {
        return this.pRequest(_url, "put", _data, _params, _timeout);
    };
    /**
     * @description patch请求
     * @template R  返回数据类型
     * @template D  data数据类型
     * @template T  params参数类型
     * @param {string} _url 接口url
     * @param {D} _data body传值
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    DataRequest.prototype.patchRequest = function (_url, _data, _params) {
        return this.pRequest(_url, "patch", _data, _params);
    };
    //#endregion
    DataRequest.prototype.getOrDeleteRequest = function (_url, _params, _method, _timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.request({
                method: typeof _method === "undefined" ? "get" : _method,
                url: _url,
                params: _params,
                timeout: _timeout
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    DataRequest.prototype.pRequest = function (_url, _method, _data, _params, _timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.request({
                method: _method,
                url: _url,
                params: typeof _params !== "undefined" ? _params : {},
                data: _data,
                timeout: _timeout
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return DataRequest;
}());
exports.default = DataRequest;
