"use client"

import React, { createContext, useState } from "react";

export type UserProps = {
    id_cliente: number | null;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
};

type AuthContextProps = {
    user: UserProps | null;
    login: (user: UserProps) => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<UserProps | null>(null);

    const login = (user: UserProps) => {
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
