import { createContext, useContext, useState, ReactNode } from "react";

const colors = {
    background: "#F4F6F9",
    text: "#1E293B",
    textSecondary: "#64748B",
    primary: "#0F172A",
    secondary: "#4F46E5",
    inputBackground: "#FFFFFF",
    buttonPrimaryBg: "#4F46E5",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondaryBg: "#E2E8F0",
    buttonSecondaryText: "#0F172A",
    buttonTertiaryText: "#1E293B",
    tabBarBackground: "#FFFFFF",
    headerBackground: "#0F172A",
    headerText: "#FFFFFF",
    border: "#E2E8F0"
};

type ThemeContextType = {
    colors: typeof colors;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContext.Provider value={{ colors }}>
            {children}
        </ThemeContext.Provider>
    );
};