import DataRequest from "./data-request";
export interface IDataRequest {
    getRequest<R, T>(_url: string, _params?: T): Promise<R>;
    postRequest<R, D, T>(_url: string, _data: D, _params?: T): Promise<R>;
    putRequest<R, D, T>(_url: string, _data: D, _params?: T): Promise<R>;
    patchRequest<R, D, T>(_url: string, _data: D, _params?: T): Promise<R>;
    deleteRequest<R, T>(_url: string, _params?: T): Promise<R>;
}
export default DataRequest;
