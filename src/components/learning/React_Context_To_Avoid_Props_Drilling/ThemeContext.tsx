/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/29/2025
 * @Time 11:31 PM
 */
import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
    theme: Theme;
    toggleTheme: () => void;
} | null>(null);

export const useTheme = () => useContext(ThemeContext)!;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "dark" ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
};
