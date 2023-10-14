import { useTimer } from "@/hooks/useTimer";

export function Settings() {
  const { selectedTime, setSelectedTime, isRunning } = useTimer();

  return (
    <div className="mt-10 flex flex-col gap-2">
      <label htmlFor="timerSelect">Select Timer Duration (minutes):</label>
      <input
        type="number"
        id="timerSelect"
        className="rounded-full bg-gray-600 shadow-md p-2"
        min="0"
        disabled={isRunning}
        step="1"
        pattern="\d+"
        value={selectedTime}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          target.value = Math.max(0, parseInt(target.value) || 0).toString();
        }}
        onChange={(e) => setSelectedTime(parseInt(e.target.value))}
      />
    </div>
  );
}
