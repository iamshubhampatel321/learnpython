import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all transform hover:scale-105 ${
        isDarkMode
          ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
          : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}
    >
      {isDarkMode ? (
        <>
          <Sun className="w-5 h-5" />
          <span className="hidden sm:inline">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span className="hidden sm:inline">Dark Mode</span>
        </>
      )}
    </button>
  );
}
