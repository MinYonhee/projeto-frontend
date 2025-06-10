"use client";
import { useEffect } from "react";
import { useThemeStore } from "../../store/themeStore";

export default function ThemeEffect() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return null;
} 