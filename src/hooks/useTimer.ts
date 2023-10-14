import { TimerContext } from "@/context/TimerContext";
import { useContext } from "react";

export function useTimer() {
  const {
    isRunning,
    minutes,
    seconds,
    selectedTime,
    setSeconds,
    setIsRunning,
    setMinutes,
    setSelectedTime,
  } = useContext(TimerContext);

  return {
    isRunning,
    minutes,
    seconds,
    selectedTime,
    setSeconds,
    setIsRunning,
    setMinutes,
    setSelectedTime,
  };
}
