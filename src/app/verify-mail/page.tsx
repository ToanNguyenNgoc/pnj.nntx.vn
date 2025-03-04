'use client'

import { AppButton } from "@/components"
import { ReqAuthVerification } from "@/interfaces/request"
import { ErrorResponse } from "@/interfaces/response"
import { AuthService } from "@/services"
import { Container } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { FC, Suspense } from "react"
import { toast } from "react-toastify"

export default function VerifyMailPage() {
  return (
    <Suspense>
      <VerificationVerification />
    </Suspense>
  )
}
const VerificationVerification: FC = () => {
  const code = useSearchParams().get('code')
  const { isPending, mutate } = useMutation<unknown, ErrorResponse, ReqAuthVerification>({
    mutationFn: (body) => AuthService.verification(body),
    onSuccess: () => toast('Verification success', { type: 'success' }),
    onError: (error) => toast(error.response?.data?.message || 'Verification failed', { type: 'error' })
  })
  return (
    <Container>
      <AppButton
        disabled={!code}
        loading={isPending}
        onClick={() => mutate({ code: String(code), recaptcha: '123' })}
      >
        Verification
      </AppButton>
    </Container>
  )
}