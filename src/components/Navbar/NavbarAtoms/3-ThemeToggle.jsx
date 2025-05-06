import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemeToggle = () => {
  const [theme, setTheme] = useState("");
  const changeTheme = (themeValue) => {
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  };
  useEffect(() => {
    if (localStorage.getItem("theme") != null) {
      if (localStorage.getItem("theme") == "dark") {
        document.body.classList.add("dark");
        setTheme("dark")
      } else {
        document.body.classList.remove("dark");
        setTheme("light")
      }
    }
  }, [localStorage.getItem("theme")]);
  return (
    <li
      className="text-identityColor text-2xl cursor-pointer relative w-6 h-6"
      onClick={() => changeTheme(theme == "light" ? "dark" : "light")}
    >
      <MdLightMode
        className={`${
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        } transition-all duration-500 ease-in-out absolute top-0 bottom-0 left-0 right-0`}
      />
      <MdDarkMode
        className={`${
          theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        } transition-all duration-500 ease-in-out absolute top-0 bottom-0 left-0 right-0`}
      />
    </li>
  );
};
export default ThemeToggle;