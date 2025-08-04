import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 h-[3rem] bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      Toggle Theme: {theme}
    </button>
  );
}
