import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";

export function Profile(){
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
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <ButtonText title="Salvar" />

      </Form>
    </Container>
  )
}