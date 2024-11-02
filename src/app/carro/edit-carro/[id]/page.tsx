"use client";

import FormButton from '@/components/Forms/FormButton';
import FormFieldset from '@/components/Forms/FormFieldset';
import FormInput from '@/components/Forms/FormInputs';
import { MainCont } from '@/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CarroProps } from '@/types';

export default function EditaCarro({ params }: { params: { id: number } }) {
    
    const navigate = useRouter();

    const [carro, setCarro] = useState<CarroProps>({
        idVeiculo: 0,
        placa: '',
        modelo: '',
        marca: ''
    });

    useEffect(() => {
        const chamadaApi = async () => {
            const idVeiculo = params.id;
            
            if (!idVeiculo) {
                console.error("ID do veículo não encontrado.");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/chatcarveiculo/buscaveiculo/${idVeiculo}`);

                if (!response.ok) {
                    console.error(`Erro ao buscar veículo: ${response.status}`);
                }

                const data = await response.json();

                if (data && data.idVeiculo) {
                    setCarro(data);
                } else {
                    console.error("Nenhum veículo encontrado com esse ID.");
                }
            } catch (error) {
                console.error("Erro ao recuperar o carro:", error);
            }
        };

        chamadaApi();
    }, [params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarro({ ...carro, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/chatcarveiculo/alteraveiculo`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro)
            });

            if (response.ok) {
                alert('Carro atualizado com sucesso!');
                setCarro({ idVeiculo: 0, placa: '', modelo: '', marca: '' });
                navigate.push('/carro/lista-carro');
            } else {
                alert('Erro ao atualizar carro!');
            }
        } catch (error) {
            console.error("Erro ao atualizar o carro:", error);
        }
    };

    return (
        <MainCont>
            <form onSubmit={handleSubmit}>
                <FormFieldset title="Editar Carro">
                    <label htmlFor="idplaca">Placa</label>
                    <FormInput
                        type="text"
                        name="placa"
                        id="idplaca"
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
                        value={carro.modelo}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="idmarca">Marca</label>
                    <FormInput
                        type="text"
                        name="marca"
                        id="idmarca"
                        value={carro.marca}
                        onChange={handleChange}
                        required
                    />
                    <FormButton type="submit" value="Editar Carro" />
                </FormFieldset>
            </form>
        </MainCont>
    );
}