"use client"

import FormFieldset from '@/components/Forms/FormFieldset';
import FormInput from '@/components/Forms/FormInputs';
import FormButton from '@/components/Forms/FormButton';
import { MainCont } from '@/styled';

export default function EditaCarro() {
    return (
        <MainCont>
            <form>
                <FormFieldset title="Editar Carro">
                    <label htmlFor="idplaca">Placa</label>
                    <FormInput
                        type="text"
                        name="placa"
                        id="idplaca"
                        // value={carro.nome}
                    />

                    <label htmlFor="idmodelo">Modelo</label>
                    <FormInput
                        type="text"
                        name="modelo"
                        id="idmodelo"
                        // value={carro.modelo}
                    />

                    <label htmlFor="idmarca">Marca</label>
                    <FormInput
                        type="text"
                        name="marca"
                        id="idmarca"
                        // value={carro.marca}
                    />

                    <label htmlFor="idano">Ano</label>
                    <FormInput
                        type="number"
                        name="ano"
                        id="idano"
                        // value={carro.ano}
                    />

                    <FormButton type="submit" value="Editar Produto" />
                </FormFieldset>
            </form>
        </MainCont>
    );
}