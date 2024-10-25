import Link from 'next/link';
import { StyledTable } from '../../styled';
import { FaFileInvoice, FaTrashAlt } from 'react-icons/fa';


export default function ListaCarros() {
    return (
        <StyledTable>
            <h1>Carros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano Fabricação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Replace this with your data mapping */}
                    {/* {
                        lista.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td className="flex justify-center items-center gap-2">
                                    <Link title="Editar" className="text-blue-700" href={`/produtos/produto/${p.id}`}>
                                        <FaFileInvoice />
                                    </Link>
                                    {" | "}
                                    <button title="Excluir" className="text-red-700" onClick={() => idModal(p.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))
                    } */}
                    <tr>
                        <td>ABC-1234</td>
                        <td>hb20</td>
                        <td>volkswagem</td>
                        <td>2002</td>
                        <td>
                                <div className="actions">
                                    <Link title="Editar" className="edit" href={`/edit-carro/${c.id}`}>
                                        <FaFileInvoice className="icon" />
                                    </Link>
                                    <button title="Excluir" className="delete" onClick={() => idModal(c.id)}>
                                        <FaTrashAlt className="icon" />
                                    </button>
                                </div>
                        </td>
                    </tr>
                    
                </tbody>
                {/* Uncomment and update for footer if needed */}
                {/* <tfoot className="bg-black text-white">
                    <tr>
                        <td colSpan={5}>Total de Produtos: {lista.length}</td>
                    </tr>
                </tfoot> */}
            </table>
            {/* Uncomment and update for Modal if needed */}
            {/* <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FaTrashAlt size={56} className="mx-auto text-red-500" />
                    <h3 className="text-lg font-black text-gray-800">Excluir Produto?</h3>
                    <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir o produto?</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-danger w-full" onClick={() => handleDelete(idDelete)}>Excluir</button>
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
                </div>
            </Modal> */}
        </StyledTable>
    );
}
