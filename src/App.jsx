import { useEffect, useState } from "react";
function App() {
  const [dark, setDark] = useState("light");
  const changeTheme = (themeValue) => {
    setDark(themeValue);
    localStorage.setItem("theme", themeValue);
  };
  useEffect(() => {
    if (localStorage.getItem("theme") != null) {
      if (localStorage.getItem("theme") == "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [localStorage.getItem("theme")]);
  return (
    <div className="bg-identityColor">
      <button>
        {dark == "dark" && (
          <span onClick={() => changeTheme("light")}>sun</span>
        )}
        {dark == "light" && (
          <span onClick={() => changeTheme("dark")}>moon</span>
        )}
      </button>
    </div>
  );
}

export default App;
