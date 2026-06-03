import { createContext, useContext, useState } from "react";

export type Role = 'admin' | 'common';

type AuthContextType = {
    role: Role | null; 
    login: (selectedRole: Role) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [role, setRole] = useState<Role | null>(null);

    const login = (selectedRole: Role) => {
        setRole(selectedRole);
    };

    const logout = () => {
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}