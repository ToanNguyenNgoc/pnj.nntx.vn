'use client'

import { useRouter } from "next/navigation"
import { toast } from "react-toastify";


export default function ProductPage() {
  const router = useRouter()
  // const params = useSearchParams()
  return (
    <div>
      ProductPage
      <button onClick={() => {
        router.push('/product/1');
        toast('OK', { type: 'success' })
      }}>
        Click
      </button>
    </div>
  )
}