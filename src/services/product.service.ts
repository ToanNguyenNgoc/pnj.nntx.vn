import { AxiosConfig } from "@/configs";

export const ProductService={
  show:(id:string|number)=>AxiosConfig().get(`/product/${id}`).then(res => res.data),
}