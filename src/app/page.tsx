"use client";

import { CircularProgress } from "@nextui-org/progress";
import { useEffect, useState } from "react";
export default function Home() {
  const [value, setValue] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v <= 0 ? 25 : v - 1));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <CircularProgress
          classNames={{
            svg: "w-52 h-52 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          aria-label="Loading..."
          maxValue={25}
          minValue={0}
          value={value}
          color="warning"
          strokeWidth={1}
          showValueLabel={true}
          valueLabel={value}
        />
      </section>
    </main>
  );
}
