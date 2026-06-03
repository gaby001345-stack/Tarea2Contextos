import { createContext, useContext, useState, ReactNode } from "react";

const colors = {
    background: "#F4F7F5",    
    text: "#1A2421",               
    textSecondary: "#62726B",   
    primary: "#111816",         
    secondary: "#059669",     
    inputBackground: "#FFFFFF",  
    buttonPrimaryBg: "#059669",  
    buttonPrimaryText: "#FFFFFF", 
    buttonSecondaryBg: "#E4EAD9",
    buttonSecondaryText: "#064E3B", 
    buttonTertiaryText: "#1A2421", 
    tabBarBackground: "#FFFFFF",
    headerBackground: "#064E3B", 
    headerText: "#FFFFFF",  
    border: "#E1EBE6"    
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