import { Tab, tabs } from "@/app/page";
import { FiPieChart, FiSettings } from "react-icons/fi";
import { PlayIcon } from "../Icons/PlayIcon";

interface HeaderProps {
  selectedTab: Tab;
  setSelectedTab: (value: Tab) => void;
}

export function Header({ setSelectedTab, selectedTab }: HeaderProps) {
  return (
    <header className="pt-6">
      <nav className="bg-gray-700 rounded-xl p-4 w-fit mx-auto">
        <ul className="flex items-center divide-gray-500 divide-x gap-4">
          <li>
            <div
              onClick={() => setSelectedTab(tabs[0])}
              className={`cursor-pointer font-bold transition-colors timer flex items-center gap-1 hover:text-cyan-500 hover:stroke-cyan-500 ${
                selectedTab.label === "timer"
                  ? "stroke-cyan-500 text-cyan-500"
                  : "stroke-gray-500 text-gray-500"
              }`}
            >
              <PlayIcon height="20" width="20" />
              Timer
            </div>
          </li>
          <li className="pl-4">
            <div
              onClick={() => setSelectedTab(tabs[1])}
              className={`cursor-pointer font-bold transition-colors hover:text-cyan-500 flex items-center gap-1  stroke-white hover:stroke-cyan-500 ${
                selectedTab.label === "settings"
                  ? "stroke-cyan-500 text-cyan-500"
                  : "stroke-gray-500 text-gray-500"
              }`}
            >
              <FiSettings size={20} />
              Settings
            </div>
          </li>
          <li className="pl-4">
            <div
              onClick={() => setSelectedTab(tabs[2])}
              className={`cursor-pointer transition-colors  font-bold flex items-center gap-1 hover:text-cyan-500 stroke-white hover:stroke-cyan-500
              ${
                selectedTab.label === "stats"
                  ? "stroke-cyan-500 text-cyan-500"
                  : "stroke-gray-500 text-gray-500"
              }
              `}
            >
              <FiPieChart size={20} />
              Stats
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
