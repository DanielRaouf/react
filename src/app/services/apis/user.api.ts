import { User } from "../../models";
import { IRequest } from "./types";

export const getAll = (): IRequest => ({
  endpoint: "/users",
  method: "GET",
});

export const getById = (id: number): IRequest => ({
  endpoint: "/users",
  method: "GET",
  query: { id },
});

export const create = (user: User): IRequest => ({
  endpoint: "/users",
  method: "POST",
  body: JSON.stringify(user),
});
