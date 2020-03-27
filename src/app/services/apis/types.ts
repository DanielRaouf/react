export interface IRequest {
  endpoint: string;
  method: string;
  query?: Object;
  body?: string;
}
