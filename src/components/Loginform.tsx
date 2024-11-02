"use client"

import { AuthContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';
import FormInput from './Forms/FormInputs';

export default function LoginForm() {

    const { login } = useContext(AuthContext);

    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    });

    const navigate = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        };
    
        try {
            const response = await fetch("http://localhost:8080/chatcarcliente/logincliente", cabecalho);
            const responseText = await response.text();
    
            let data;
            if (responseText) {
                data = JSON.parse(responseText);
            }
    
            if (response.ok && data) {
                const userData = {
                    id_cliente: data.idCliente,
                    nome: data.nome,
                    email: data.email,
                    cpf: data.cpf,
                    senha: usuario.senha
                };
                login(userData); // função de login do contexto
                alert("Login realizado com sucesso!");

                navigate.push('/carro/cad-carro');
            } else {
                alert("E-mail ou senha incorretos!");
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
            alert("Ocorreu um erro de conexão.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormFieldset title="Acessar Conta">
                <label htmlFor="idemail">E-mail</label>
                <FormInput
                    type="email"
                    name="email"
                    id="idemail"
                    placeholder="Digite seu email"
                    value={usuario.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="idsenha">Senha</label>
                <FormInput
                    type="password"
                    name="senha"
                    id="idsenha"
                    placeholder="Digite sua senha"
                    maxLength={12}
                    value={usuario.senha}
                    onChange={handleChange}
                    required
                />

                <FormButton type="submit" value="Entrar" />
                <FormButton type="reset" value="Limpar" />

                <p>Ainda não tem uma conta?</p>
                <Link href="/usuario/cadastro">Cadastre-se agora!</Link>
            </FormFieldset>
        </form>
    );
}