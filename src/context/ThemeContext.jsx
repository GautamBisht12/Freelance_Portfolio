import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

const themes = {
  light: {
    name: "light",
    className: "theme-light",
  },
  dark: {
    name: "dark",
    className: "theme-dark",
  },
  akatsuki: {
    name: "akatsuki",
    className: "theme-akatsuki",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "dark";
    return savedTheme;
  });

  // Update theme class on the body element
  useEffect(() => {
    const body = document.body;
    const currentTheme = themes[theme];

    // Remove all theme classes
    Object.values(themes).forEach((t) => {
      body.classList.remove(t.className);
    });

    // Add current theme class
    body.classList.add(currentTheme.className);

    // Special handling for dark mode
    if (theme === "dark" || theme === "akatsuki") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
