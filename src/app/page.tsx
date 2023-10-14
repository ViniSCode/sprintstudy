"use client";

import { Header } from "@/components/Header";
import { Settings } from "@/components/Settings";
import { CustomTimer } from "@/components/Timer";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

export type Tab = {
  label: string;
  component?: ReactNode;
};

const tabs: Tab[] = [
  {
    label: "timer",
    component: <CustomTimer />,
  },
  {
    label: "settings",
    component: <Settings />,
  },
  {
    label: "stats",
    component: <h1 className="text-5xl">Stats</h1>,
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <>
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.component}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}
