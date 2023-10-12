import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export function CustomTimer() {
  const [selectedTime, setSelectedTime] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(selectedTime);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            const audio = new Audio(
              "https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7"
            );
            audio.play();
            toast.success("Time for a break!");
            setIsRunning(false);
          } else {
            setMinutes((m) => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, isRunning]);

  useEffect(() => {
    setMinutes(selectedTime);
    setSeconds(0);
  }, [selectedTime]);

  const handleStart = (): void => {
    setIsRunning(true);
  };

  const handlePause = (): void => {
    setIsRunning(false);
  };

  const circumference = Math.PI * 100; // Circumference of the circle

  // Calculate the stroke-dashoffset based on the current progress
  const strokeDashoffset =
    circumference * ((minutes * 60 + seconds) / (selectedTime * 60));

  return (
    <div className="custom-timer flex flex-col gap-10 items-center justify-center">
      <svg
        className="relative progress-ring w-52 h-52 md:h-96 md:w-96 rounded-full"
        // preserveAspectRatio="none"
        viewBox="8.5 8.5 103 103"
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
          strokeWidth="3"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
        <text
          x="60"
          y="60"
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
          disabled={isRunning}
          step="1"
          pattern="\d+"
          value={selectedTime}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = Math.max(1, parseInt(target.value) || 1).toString();
          }}
          onChange={(e) => setSelectedTime(parseInt(e.target.value))}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded-full w-full"
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={handlePause}
            className="bg-red-500 text-white px-4 py-2 rounded-full w-full"
            disabled={!isRunning}
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
}
