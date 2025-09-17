"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "synthwave" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap border swap-rotate">
      {/* hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={theme === "synthwave"}
        onChange={handleToggle}
      />

      {/* sun icon */}
      <svg
        className="swap-off h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M5.64,17l-.71.71...Z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M21.64,13a1,1...Z" />
      </svg>
    </label>
  );
}
