import React, { FC, useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/AuthConfig';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="/">
          <FiLogIn /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
