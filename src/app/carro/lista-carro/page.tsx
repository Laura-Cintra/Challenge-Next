// "use client"

// import { StyledTable } from '@/styled';
// import { CarroProps } from '@/types';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { FaFileInvoice, FaTrashAlt } from 'react-icons/fa';
// import Modal from './Modal';

// export default function ListaCarros() {

//     const [listaCarros, setListaCarros] = useState<CarroProps[]>([]);

//     const [open, setOpen] = useState(false);

//     const [idDelete, setIdDelete] = useState<number | null>(null);

//     const idModal = (id: number) => {
//         setOpen(true);
//         setIdDelete(id);
//     };

//     useEffect(() => {
//         const fetchCarros = async () => {
//             const id_cliente = localStorage.getItem('id_cliente');

//             if (!id_cliente) {
//                 alert("ID do cliente não encontrado! Faça o login novamente.");
//                 return;
//             }

//             try {
//                 const response = await fetch(`http://localhost:8080/chatcarveiculo/lendoveiculo/${id_cliente}`);
//                 const data = await response.json();
//                 setListaCarros(data);
//             } catch (error) {
//                 console.error("Erro ao buscar carros:", error);
//             }
//         };

//         fetchCarros();
//     }, []);

//     const handleDelete = async (id: number) => {
//         try {
//             const response = await fetch(`http://localhost:8080/chatcarveiculo/removercarro/${id}`, { method: "DELETE" });
//             if (response.ok) {
//                 setOpen(false);
//                 setListaCarros(listaCarros.filter(car => car.id !== id));
//             } else {
//                 alert("Erro ao deletar o carro");
//                 setOpen(false);
//             }
//         } catch (error) {
//             console.error("Falha ao apagar registro.", error);
//         }
//     };

//     return (
//         <StyledTable>
//             <h1>Carros</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Placa</th>
//                         <th>Modelo</th>
//                         <th>Marca</th>
//                         <th>Ações</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {listaCarros.map(car => (
//                         <tr key={car.id}>
//                             <td>{car.placa}</td>
//                             <td>{car.modelo}</td>
//                             <td>{car.marca}</td>
//                             <td>
//                                 <div className="actions">
//                                     <Link title="Editar" className="edit" href={`/edit-carro/${car.id}`}>
//                                         <FaFileInvoice className="icon" />
//                                     </Link>
//                                     <button title="Excluir" className="delete" onClick={() => idModal(car.id)}>
//                                         <FaTrashAlt className="icon" />
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//                 <tfoot className="bg-black text-white">
//                     <tr>
//                         <td colSpan={5}>Total de Carros: {listaCarros.length}</td>
//                     </tr>
//                 </tfoot>
//             </table>
//             <Modal open={open} onClose={() => setOpen(false)}>
//                 <div className="text-center w-56">
//                     <FaTrashAlt size={56} className="mx-auto text-red-500" />
//                     <h3 className="text-lg font-black text-gray-800">Excluir Carro?</h3>
//                     <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir o carro?</p>
//                 </div>
//                 <div className="flex gap-4">
//                     <button className="btn btn-danger w-full" onClick={() => handleDelete(idDelete!)}>Excluir</button>
//                     <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
//                 </div>
//             </Modal>
//         </StyledTable>
//     );
// }