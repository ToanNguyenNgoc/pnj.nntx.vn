import { ProductService } from "@/services";
import { unstable_cache } from "next/cache";
import { PageProps } from "../../../../.next/types/app/page";

const getDetail = unstable_cache(async (id: number | string) => {
  const response = await ProductService.show(id);
  return response.context;
}, ["product-detail"], { revalidate: 2 });

export default async function ProductDetailPage(props: PageProps) {
  const id = (await props.params).id
  const detail = await getDetail(1);
  console.log(id);
  console.log(detail);

  return (
    <div>
      Product Detail Page
    </div>
  );
}
