"use client";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full flex justify-end p-6 h-24 sticky top-0 z-10">
      <button
        type="button"
        className="p-2"
        aroa-label="Setja á dark mode"
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </nav>
  );
};
