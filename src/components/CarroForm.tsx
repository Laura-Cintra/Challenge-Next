"use client";

import FormInput from './Forms/FormInputs';
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';
import Link from 'next/link';

export default function CarroForm() {
    return (
        <div>
            <form action="cadastro-carro" method="get">
                <FormFieldset title="Cadastrar Carro">
                    <label htmlFor="idplaca">Placa</label>
                    <FormInput
                        type="text"
                        name="placa"
                        id="idplaca"
                        placeholder="Digite a placa do carro"
                        required
                    />

                    <label htmlFor="idmodelo">Modelo</label>
                    <FormInput
                        type="text"
                        name="modelo"
                        id="idmodelo"
                        placeholder="Digite o modelo do carro"
                        required
                    />

                    <label htmlFor="idmarca">Marca</label>
                    <FormInput
                        type="text"
                        name="marca"
                        id="idmarca"
                        placeholder="Digite a marca do carro"
                        required
                    />

                    <label htmlFor="idano">Ano</label>
                    <FormInput
                        type="number"
                        name="ano"
                        id="idano"
                        placeholder="Digite o ano do carro"
                        required
                    />

                    <FormButton type="submit" value="Cadastrar" />
                    <FormButton type="reset" value="Limpar" />
                </FormFieldset>
            </form>
            <div className='div_button'>
            <button><Link href="/lista-carro">Lista de Carros</Link></button>
            </div>
        </div>
    );
}