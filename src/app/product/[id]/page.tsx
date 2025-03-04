import { ProductService } from "@/services";
import { unstable_cache } from "next/cache";

const getDetail = (id:number|string) => unstable_cache(async()=>{
  const response = await ProductService.show(id)
  return response.context
}, [`detail ${id}`], {revalidate:2})


export default async function ProductDetailPage({ params }: { params: { id: string } }){
  const detail = await getDetail(1)()
  console.log(params.id)
  console.log(detail)
  return (
    <div>
      ProductDetailPage
    </div>
  )
}