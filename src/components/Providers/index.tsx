"use client";

import { TimerContextProvider } from "@/context/TimerContext";
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
      <TimerContextProvider>
        <ToastContainer />
        {children}
      </TimerContextProvider>
    </NextUIProvider>
  );
}
