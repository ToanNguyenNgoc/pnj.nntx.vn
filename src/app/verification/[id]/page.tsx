'use client'
import { AppButton } from "@/components";
import { ReqAuthVerification } from "@/interfaces/request";
import { ErrorResponse } from "@/interfaces/response";
import { AuthService } from "@/services";
import { Container } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { use } from "react";
import { toast } from "react-toastify";

export default function VerificationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { isPending, mutate } = useMutation<unknown, ErrorResponse, ReqAuthVerification>({
    mutationFn: (body) => AuthService.verification(body),
    onSuccess: () => toast('Verification success', { type: 'success' }),
    onError: (error) => toast(error.response?.data?.message || 'Verification failed', { type: 'error' })
  })
  return (
    <Container>
      <AppButton
        disabled={!resolvedParams.id}
        loading={isPending}
        onClick={() => mutate({ code: String(resolvedParams.id), recaptcha: '123' })}
      >
        Verification
      </AppButton>
    </Container>
  )
}