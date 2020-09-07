import { IDataRequest } from "./index";
import { AxiosInstance } from "axios";
export default class DataRequest implements IDataRequest {
    private request;
    private static inst;
    constructor(_request: AxiosInstance);
    static Inst(_request: AxiosInstance): DataRequest;
    /**
     * @description get请求
     * @template R 返回数据类型
     * @template T params参数类型
     * @param {string} _url 接口url
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    getRequest<R, T>(_url: string, _params?: T, _timeout?: number): Promise<R>;
    /**
     * @description delete请求
     * @template R 返回数据类型
     * @template T params参数类型
     * @param {string} _url 接口url
     * @param {T} [_params] 参数
     * @returns {Promise<R>} 返回值
     * @memberof DataRequest
     */
    deleteRequest<R, T>(_url: string, _params?: T, _timeout?: number): Promise<R>;
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
    postRequest<R, D, T>(_url: string, _data: D, _params?: T, _timeout?: number): Promise<R>;
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
    putRequest<R, D, T>(_url: string, _data: D, _params?: T, _timeout?: number): Promise<R>;
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
    patchRequest<R, D, T>(_url: string, _data: D, _params?: T): Promise<R>;
    private getOrDeleteRequest;
    private pRequest;
}
