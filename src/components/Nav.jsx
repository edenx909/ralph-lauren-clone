import { useEffect, useState } from "react";
import hero from "../assets/hero.jpeg";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [home, setHome] = useState();
  useEffect(() => {
    location.pathname === "/" ? setHome(true) : setHome(false);
  }, [location.pathname]);

  return (
    <div
      className={`${home ? "h-screen" : "h-auto"} bg-black bg-cover p-12 text-white`}
      style={{
        backgroundImage: `url(${home ? hero : ""})`,
      }}
    >
      <div className="flex font-light uppercase">
        <div>
          <ul className="flex space-x-6">
            <li className="pr-8 font-fenice text-xl uppercase tracking-widest">
              <a href="/"> Ralph Lauren</a>
            </li>
            <a href="/shop/men">Men</a>
            <a href="/shop/women">Women</a>
            <li>
              <a href="/shop">Shop All</a>
            </li>
          </ul>
        </div>
        <div className="fixed right-0 flex space-x-6 pr-16">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                />
                <path d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z" />
                <path strokeLinecap="round" d="M5 20v-1a7 7 0 0 1 10-6.326" />
              </g>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M7.25 7.25v-.12a4.75 4.75 0 1 1 9.5 0v.12h1.501c.571 0 1.056.419 1.14.984l.218 1.493c.43 2.938.43 5.924 0 8.862a3.135 3.135 0 0 1-2.779 2.664l-.629.065a40.7 40.7 0 0 1-8.402 0l-.629-.065a3.135 3.135 0 0 1-2.779-2.664a30.6 30.6 0 0 1 0-8.862l.219-1.493a1.15 1.15 0 0 1 1.139-.984zm3.94-3.267a3.25 3.25 0 0 1 4.06 3.147v.12h-6.5v-.12a3.25 3.25 0 0 1 2.44-3.147M7.25 8.75V11a.75.75 0 0 0 1.5 0V8.75h6.5V11a.75.75 0 0 0 1.5 0V8.75h1.2l.175 1.194a29.1 29.1 0 0 1 0 8.428a1.635 1.635 0 0 1-1.45 1.39l-.629.064c-2.69.28-5.402.28-8.092 0l-.63-.065a1.635 1.635 0 0 1-1.449-1.39a29 29 0 0 1 0-8.427L6.05 8.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
