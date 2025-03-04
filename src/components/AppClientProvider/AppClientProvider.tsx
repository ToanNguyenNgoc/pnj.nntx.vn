'use client'

import { queryClient } from "@/configs";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, Fragment, ReactNode } from "react";
import { ToastContainer, Zoom } from "react-toastify";

export const AppClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </Fragment>
  )
}