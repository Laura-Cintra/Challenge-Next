"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';
import FormInput from './Forms/FormInputs';

export default function CadastroForm() {

    const navigate = useRouter()

    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        confirmasenha: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validação de senha
        if (cliente.senha !== cliente.confirmasenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const {...dadosRequisicao } = cliente;

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosRequisicao), // Enviar apenas os dados necessários
        };

        try {
            const response = await fetch("http://localhost:8080/chatcarcliente/cadastrocliente", cabecalho);

            if (response.ok) {
                alert(`Usuário ${cliente.nome} cadastrado com sucesso!`);
                setCliente({
                    nome: "",
                    cpf: "",
                    email: "",
                    senha: "",
                    confirmasenha: ""
                });
                navigate.push('/usuario/login');
            } else {
                alert("Erro ao cadastrar!");
            }
        }
        catch (error) {
            console.error("Erro ao cadastrar o cliente", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormFieldset title="Cadastrar Conta">
                <label htmlFor="idnome">Nome</label>
                <FormInput
                    type="text"
                    name="nome"
                    id="idnome"
                    placeholder="Digite seu nome completo"
                    value={cliente.nome}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="idcpf">CPF</label>
                <FormInput
                    type="text"
                    name="cpf"
                    id="idcpf"
                    placeholder="Digite seu CPF"
                    value={cliente.cpf}
                    onChange={handleChange}
                    maxLength={11}
                    required
                />

                <label htmlFor="idemail">E-mail</label>
                <FormInput
                    type="email"
                    name="email"
                    id="idemail"
                    placeholder="Digite seu email"
                    value={cliente.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="idsenha">Senha</label>
                <FormInput
                    type="password"
                    name="senha"
                    id="idsenha"
                    placeholder="Digite sua senha"
                    value={cliente.senha}
                    onChange={handleChange}
                    maxLength={12}
                    required
                />

                <label htmlFor="idconfirmasenha">Confirmar Senha</label>
                <FormInput
                    type="password"
                    name="confirmasenha"
                    id="idconfirmasenha"
                    placeholder="Digite sua senha novamente"
                    maxLength={12}
                    value={cliente.confirmasenha}
                    onChange={handleChange}
                    required

                />

                <FormButton type="submit" value="Cadastrar" />
                <FormButton type="reset" value="Limpar" />

                <p>Já possui uma conta cadastrada?</p>
                <Link href="/usuario/login">Entrar em conta existente</Link>
            </FormFieldset>
        </form>
    );
}