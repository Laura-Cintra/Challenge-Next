"use client"

import Link from 'next/link';
import FormInput from './Forms/FormInputs';
import FormButton from './Forms/FormButton';
import FormFieldset from './Forms/FormFieldset';

export default function LoginForm() {
    return (
        <form action="login" method="get">
            <FormFieldset title="Acessar Conta">
            <label htmlFor="idemail">E-mail</label>
            <FormInput
                type="email"
                name="email"
                id="idemail"
                placeholder="Digite seu email"
                required
            />

            <label htmlFor="idsenha">Senha</label>
            <FormInput
                type="password"
                name="senha"
                id="idsenha"
                placeholder="Digite sua senha"
                maxLength={6}
                required
            />

            <FormButton type="submit" value="Entrar" />
            <FormButton type="reset" value="Limpar" />

            <p>Ainda não tem uma conta?</p>
            <Link href="/cadastro">Cadastre-se agora!</Link>
            </FormFieldset>
        </form>
    );
}