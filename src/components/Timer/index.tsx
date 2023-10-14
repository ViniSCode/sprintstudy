import { useTimer } from "@/hooks/useTimer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { PauseIcon } from "../Icons/PauseIcon";
import { PlayIcon } from "../Icons/PlayIcon";

export function CustomTimer() {
  const {
    selectedTime,
    setSelectedTime,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    isRunning,
    setIsRunning,
  } = useTimer();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);

            if (Notification.permission === "granted") {
              new Notification("Timer Ended", {
                body: "Time for a break!",
                icon: "/favicon.svg",
              });
            } else if (Notification.permission !== "denied") {
              Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                  new Notification("Timer Ended", {
                    body: "Time for a break!",
                    icon: "/favicon.svg",
                  });
                } else {
                  toast.error(
                    "You've disabled notifications. Please enable them to receive timer alerts."
                  );
                }
              });
            } else {
              toast.error(
                "You've disabled notifications. Please enable them to receive timer alerts."
              );
            }

            toast.success("Time for a break!");
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
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

      <div className="timer-controls text-base flex flex-col items-center justify-center gap-2">
        <motion.div className="mt-2 bg-gray-700 rounded-xl w-fit p-3 py-2">
          <AnimatePresence mode="wait">
            {isRunning ? (
              <motion.button
                key="pause"
                aria-label="Pause Button"
                onClick={handlePause}
                className="text-[0] stroke-gray-500 hover:stroke-white transition-colors rounded-sm p-1 w-fit"
                disabled={!isRunning}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <PauseIcon height="40" width="40" />
              </motion.button>
            ) : (
              <motion.button
                key="start"
                aria-label="Start Button"
                onClick={handleStart}
                className="text-[0] stroke-gray-500 hover:stroke-white transition-colors text-white rounded-sm p-1 w-fit "
                disabled={isRunning}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <PlayIcon height="40" width="40" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* <div className="mt-10 flex flex-col gap-2">
          <label htmlFor="timerSelect">Select Timer Duration (minutes):</label>
          <input
            type="number"
            id="timerSelect"
            className="rounded-full bg-gray-600 shadow-md p-2"
            min="0"
            disabled={isRunning}
            step="1"
            pattern="\d+"
            value={selectedTime} // This should be updated if you're using seconds or a different format
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = Math.max(
                0,
                parseInt(target.value) || 0
              ).toString();
            }}
            onChange={(e) => setSelectedTime(parseInt(e.target.value))}
          />
        </div> */}
      </div>
    </div>
  );
}
