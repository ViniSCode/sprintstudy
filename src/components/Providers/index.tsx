"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <ToastContainer />
      {children}
    </NextUIProvider>
  );
}
