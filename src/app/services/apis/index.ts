import * as user from "./user.api";
import { IRequest } from "./types";
const baseUrl = "https://b457323a-48c5-43f3-aa49-5bfe80f0a465.mock.pstmn.io";

const serializeQueryString = (obj: any) => {
  const str = [];
  for (let p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  const query = str.join("&");
  return query ? `?${query}` : "";
};

const execute = async (request: IRequest): Promise<any> => {
  const res = await fetch(
    `${baseUrl}/${request.endpoint}${serializeQueryString(request.query)}`,
    {
      method: request.method,
      body: request.body,
    }
  );
  return await res.json();
};

export default execute;
export { user };
