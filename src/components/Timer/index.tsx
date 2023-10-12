import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export function CustomTimer() {
  const [selectedTime, setSelectedTime] = useState(1);
  const [minutes, setMinutes] = useState(selectedTime);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          const audio = new Audio(
            "https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7"
          );
          audio.play();
          toast.success("Pomodoro timer has ended. Time for a break!");
        } else {
          setMinutes((m) => m - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  useEffect(() => {
    setMinutes(selectedTime);
    setSeconds(0);
  }, [selectedTime]);

  const circumference = Math.PI * 100; // Circumference of the circle

  // Calculate the stroke-dashoffset based on the current progress
  const strokeDashoffset =
    circumference * ((minutes * 60 + seconds) / (selectedTime * 60));

  return (
    <div className="custom-timer flex flex-col gap-10 items-center justify-center">
      <svg
        className="relative rounded-full progress-ring w-32 h-32 md:h-80 md:w-80"
        viewBox="0 0 120 120"
      >
        <circle
          className="progress-ring-circle stroke-gray-600"
          strokeWidth="2"
          fill="black"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="progress-ring-progress stroke-cyan-500"
          strokeWidth="4"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="progress-text"
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </text>
      </svg>
      <div className="timer-controls text-base flex flex-col gap-2">
        <label htmlFor="timerSelect">Select Timer Duration (minutes):</label>
        <input
          type="number"
          id="timerSelect"
          className="rounded-full bg-gray-600 shadow-md p-2"
          min="1"
          step="1"
          pattern="\d+"
          value={selectedTime}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = Math.max(1, parseInt(target.value) || 1).toString();
          }}
          onChange={(e) => setSelectedTime(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}
