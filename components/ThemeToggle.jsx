"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const CSS = `
  .theme-toggle-btn {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s, transform 0.15s;
    overflow: hidden;
  }

  .theme-toggle-btn:active {
    transform: scale(0.96);
  }
  
  .theme-toggle-icon {
    position: absolute;
    transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
  
  .theme-toggle-icon.sun {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  
  .theme-toggle-icon.sun.hide {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }
  
  .theme-toggle-icon.moon {
    opacity: 0;
    transform: rotate(-90deg) scale(0);
  }
  
  .theme-toggle-icon.moon.show {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

export default function ThemeToggle({ t }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 44,
          height: 44,
          border: `1px solid ${t.border}`,
          borderRadius: 10,
        }}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <>
      <style>{CSS}</style>
      <button
        className="theme-toggle-btn"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{
          border: `1px solid ${t.border}`,
          background: t.bg,
        }}
        aria-label="Toggle theme"
      >
        <Sun
          size={20}
          className={`theme-toggle-icon sun ${isDark ? "hide" : ""}`}
          style={{ color: t.text }}
        />
        <Moon
          size={20}
          className={`theme-toggle-icon moon ${isDark ? "show" : ""}`}
          style={{ color: t.text }}
        />
      </button>
    </>
  );
}
