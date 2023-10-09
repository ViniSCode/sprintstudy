import Link from "next/link";
import {} from "react-icons/";

export function Header() {
  return (
    <header>
      <nav className="bg-gray-700 rounded-xl p-4 w-fit mx-auto mt-2">
        <ul className="flex items-center divide-gray-500 divide-x gap-4">
          <li>
            <Link
              href="/"
              className="font-bold transition-colors timer flex items-center gap-0.5 hover:text-cyan-500 stroke-white hover:stroke-cyan-500 text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.35983 12.1393V18.7765C3.35983 20.9771 5.77389 22.3671 7.73924 21.2991L10.7906 19.6396M3.35983 8.32859V5.50203C3.35983 3.30138 5.77389 1.91144 7.73924 2.97937L19.9448 9.61755C20.4024 9.86087 20.7851 10.2241 21.052 10.6683C21.3189 11.1125 21.4599 11.621 21.4599 12.1393C21.4599 12.6575 21.3189 13.166 21.052 13.6102C20.7851 14.0544 20.4024 14.4176 19.9448 14.661L13.842 17.9801"
                  // stroke="white"
                  strokeWidth="1.429"
                  strokeLinecap="round"
                />
              </svg>
              Timer
            </Link>
          </li>
          <li className="pl-4">
            <Link
              href="/"
              className="font-bold transition-colors hover:text-cyan-500"
            >
              Settings
            </Link>
          </li>
          <li className="pl-4">
            <Link
              href="/"
              className="font-bold transition-colors hover:text-cyan-500"
            >
              Stats
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
