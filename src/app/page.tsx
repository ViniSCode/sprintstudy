"use client";

import { CustomTimer } from "@/components/Timer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <CustomTimer />
      </section>
    </main>
  );
}
