import * as user from './user.api';
import { IRequest } from './types';
const baseUrl = 'http://localhost';

const serializeQueryString = (obj: any) => {
  const str = [];
  for (let p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  const query = str.join("&");
  return query ? `?${query}` : '';
}

const execute = (request: IRequest): Promise<any> => {
  return fetch(`${baseUrl}/${request.endpoint}${serializeQueryString(request.query)}`, {
    method: request.method,
    body: request.body
  }).then(res => res.json());
}

export default execute;
export {
  user
}
