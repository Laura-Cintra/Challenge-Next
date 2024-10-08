import FormInput from './Forms/FormInputs';
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';
import { Link } from 'react-router-dom';

export default function CadastroForm() {
    return (
        <form action="cadastro" method="get">
            <FormFieldset title="Cadastrar Conta">
            <label htmlFor="idnome">Nome</label>
            <FormInput
                type="text"
                name="nome"
                id="idnome"
                placeholder="Digite seu nome completo"
                required
            />

            <label htmlFor="idcpf">CPF</label>
            <FormInput
                type="text"
                name="cpf"
                id="idcpf"
                placeholder="Digite seu CPF"
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            />

            <label htmlFor="idemail">E-mail</label>
            <FormInput
                type="email"
                name="email"
                id="idemail"
                placeholder="Digite seu email"
            />

            <label htmlFor="idsenha">Senha</label>
            <FormInput
                type="password"
                name="senha"
                id="idsenha"
                placeholder="Digite sua senha"
                maxLength={12}
            />

            <label htmlFor="idconfirmasenha">Confirmar Senha</label>
            <FormInput
                type="password"
                name="confirmasenha"
                id="idconfirmasenha"
                placeholder="Digite sua senha novamente"
                maxLength={12}
            />

            <FormButton type="submit" value="Cadastrar" />
            <FormButton type="reset" value="Limpar" />

            <p>Já possui uma conta cadastrada?</p>
            <Link to="/login">Entrar em conta existente</Link>
            </FormFieldset>
        </form>
    );
}