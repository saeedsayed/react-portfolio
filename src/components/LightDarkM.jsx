import { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const LightDarkM = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const handleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <button
      title={darkMode ? "change to light mode" : "change to dark mode"}
      className="bg-bg-nav rounded-full  px-2 sm:px-3 h-10 sm:h-auto  text-2xl flex justify-center items-center border-[1px] 
        border-border-color active:scale-90 hover:border-hover-color transition-all sm:order-3"
      onClick={handleTheme}
    >
      {darkMode ? (
        <FaRegMoon className="text-gray-400" />
      ) : (
        <FaRegSun className="text-yellow-400" />
      )}
    </button>
  );
};

export default LightDarkM;
