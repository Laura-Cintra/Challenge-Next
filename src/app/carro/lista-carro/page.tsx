"use client";

import { AuthContext } from '@/context';
import { StyledTable } from '@/styled';
import { CarroProps } from '@/types';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import Modal from './Modal';

export default function ListaCarros() {
    const [listaCarros, setListaCarros] = useState<CarroProps[]>([]);
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [placaDelete, setPlacaDelete] = useState('');

    const idModal = (placa: string) => {
        setOpen(true);
        setPlacaDelete(placa);
    };

    useEffect(() => {
        if (!user) {
            alert("ID do cliente não encontrado! Faça o login novamente.");
            return;
        }

        const fetchCarros = async () => {
            try {
                const response = await fetch(`http://localhost:8080/chatcarveiculo/lendoveiculo/${user.id_cliente}`);
                const data = await response.json();
                console.log(data);
                setListaCarros(data);
            } catch (error) {
                console.error("Erro ao buscar carros:", error);
            }
        };

        fetchCarros();
    }, [user]);

    const handleDelete = async (placa: string) => {
        try {
            const response = await fetch(`http://localhost:8080/chatcarveiculo/deleteveiculo/${placa}`, { method: "DELETE" });
            if (response.ok) {
                setOpen(false);
                setListaCarros(listaCarros.filter(car => car.placa !== placa));
            } else {
                alert("Erro ao deletar o carro");
                setOpen(false);
            }
        } catch (error) {
            console.error("Falha ao apagar registro.", error);
        }
    };

    return (
        <StyledTable>
            <h1>Carros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCarros.map(car => (
                        <tr key={car.idVeiculo}>
                            <td>{car.placa}</td>
                            <td>{car.modelo}</td>
                            <td>{car.marca}</td>
                            <td>
                                <div className="actions">
                                    <Link title="Editar" className="edit" href={`/carro/edit-carro/${car.idVeiculo}`}>
                                        <MdModeEditOutline className="icon" />
                                    </Link>
                                    <button title="Excluir" className="delete" onClick={() => idModal(car.placa)}>
                                        <FaTrash className="icon" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Total de Carros: {listaCarros.length}</td>
                    </tr>
                </tfoot>
            </table>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FaTrash size={56} className="mx-auto text-red-500" />
                    <h3 className="text-lg font-black text-gray-800">Excluir carro?</h3>
                    <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir este carro?</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-danger w-full" onClick={() => handleDelete(placaDelete)}>Excluir</button>
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
                </div>
            </Modal>
        </StyledTable>
    );
}