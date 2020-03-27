import { User } from "../../models";
import { IRequest } from "./types";

export const getAll = (): IRequest => ({
  endpoint: "/user",
  method: "GET",
});

export const getById = (id: number): IRequest => ({
  endpoint: "/user",
  method: "GET",
  query: { id },
});

export const create = (user: User): IRequest => ({
  endpoint: "/user",
  method: "POST",
  body: JSON.stringify(user),
});
