import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      darkMode ? "#202C36" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--card-background-color",
      darkMode ? "#46535e" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--hover-background-color",
      darkMode ? "#F2F2F222" : "#0000000a"
    );
    document.documentElement.style.setProperty(
      "--navbar-background-color",
      darkMode ? "#3e4a55" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--heading-text-color",
      darkMode ? "#F2F2F2" : "#000000de"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "#ffffff99" : "#00000099"
    );
    document.documentElement.style.setProperty(
      "--box-shadow",
      darkMode ? "0 5px 10px #00000055" : "0 5px 10px #00000055"
    );
  }, [darkMode]);


  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="navbar-title">The Flag App</div>
          <div>
            <img className="navbar-logo" src={darkMode ? "/logo.png" : "/logo-dark.png"} alt="Techover" />
          </div>
          <button
            className="navbar-mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <svg
              class="mode-icon"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              {darkMode ? <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"></path> : <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"></path>}
            </svg>
            {darkMode ? "DARK MODE" : "LIGHT MODE"}
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
