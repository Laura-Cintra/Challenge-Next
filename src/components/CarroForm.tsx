"use client"

import { AuthContext } from "@/context"; // Importando o contexto de autenticação
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';
import FormInput from './Forms/FormInputs';

export default function CarroForm() {

    const { user } = useContext(AuthContext); // Usando o id do usuário logado

    const [carro, setCarro] = useState({
        placa: "",
        modelo: "",
        marca: ""
    });

    const navigate = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarro({ ...carro, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // verifica se o usuário está logado
        if (!user) {
            alert("Você precisa estar logado para cadastrar um carro.");
            return;
        }

        // adicionando o id cliente no corpo da requisição
        const carroComId = { ...carro, idCliente: user.id_cliente };

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carroComId),
        };

        try {
            const response = await fetch("http://localhost:8080/chatcarveiculo/cadastraveiculo", cabecalho);

            if (response.ok) {
                alert(`Carro ${carro.placa} cadastrado com sucesso!`);
                setCarro({
                    placa: "",
                    modelo: "",
                    marca: ""
                });
                navigate.push('/carro/lista-carro');
            } else {
                alert('Erro ao cadastrar carro!')
            }
        }
        catch (error) {
            console.error("Erro ao cadastrar carro", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormFieldset title="Cadastrar Carro">
                    <label htmlFor="idplaca">Placa</label>
                    <FormInput
                        type="text"
                        name="placa"
                        id="idplaca"
                        placeholder="Digite a placa do carro"
                        value={carro.placa}
                        maxLength={7}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="idmodelo">Modelo</label>
                    <FormInput
                        type="text"
                        name="modelo"
                        id="idmodelo"
                        placeholder="Digite o modelo do carro"
                        value={carro.modelo}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="idmarca">Marca</label>
                    <FormInput
                        type="text"
                        name="marca"
                        id="idmarca"
                        placeholder="Digite a marca do carro"
                        value={carro.marca}
                        onChange={handleChange}
                        required
                    />

                    <FormButton type="submit" value="Cadastrar" />
                    <FormButton type="reset" value="Limpar" />
                </FormFieldset>
            </form>
            <div className='div_button'>
                <button><Link href="/carro/lista-carro">Lista de Carros</Link></button>
            </div>
        </div>
    );
}