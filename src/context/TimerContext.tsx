import { ReactNode, createContext, useState } from "react";

interface TimerContextProviderProps {
  children: ReactNode;
}

interface TimerContextData {
  selectedTime: number;
  setSelectedTime: (value: number) => void;
  minutes: number;
  setMinutes: (value: number) => void;
  seconds: number;
  setSeconds: (value: number) => void;
  isRunning: boolean;
  setIsRunning: (value: boolean) => void;
}

export const TimerContext = createContext({} as TimerContextData);

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [selectedTime, setSelectedTime] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(selectedTime);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <TimerContext.Provider
      value={{
        selectedTime,
        setSelectedTime,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        isRunning,
        setIsRunning,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
