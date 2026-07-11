"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-charcoal/20 p-2 text-charcoal-soft hover:border-primary hover:text-primary transition-colors shrink-0"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
