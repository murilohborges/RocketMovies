import { useState } from 'react';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

export function Profile(){
  const { user, updateProfile } = useAuth();

  const[name, setName] = useState(user.name);
  const[email, setEmail] = useState(user.email);
  const[passwordOld, setPasswordOld] = useState();
  const[passwordNew, setPasswordNew] = useState();

  async function handleUpdate(){
    const user = {
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    await updateProfile({ user });
  }
  
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Avatar>
        <img 
          src="https://github.com/murilohborges.png" 
          alt="Foto do Usuário" 
        />
        <label htmlFor="avatar">
          <FiCamera/>

          <input id="avatar" type="file" />

        </label>
      </Avatar>

      <Form>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <ButtonText title="Salvar" onClick={handleUpdate}/>

      </Form>
    </Container>
  )
}