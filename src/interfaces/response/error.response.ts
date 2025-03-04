import { AxiosError } from "axios";

export type ErrorResponse = AxiosError<{
  error:string;
  message:string|string[];
  statusCode:number
}>