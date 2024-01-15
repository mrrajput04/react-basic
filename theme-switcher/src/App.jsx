import { useEffect, useState } from "react";
import Card from "./component/Card";
import ThemeBtn from "./component/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full max-w-sm mx-auto">
          <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
            <ThemeBtn />
          </div>
          <Card />
          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
