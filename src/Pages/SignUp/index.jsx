import { Container, Menu, Form, Background, NewAccountButton } from "./styles";
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { FiUser, FiArrowLeft, FiLock, FiMail } from "react-icons/fi";

export function SignUp(){
  return(
    <Container>
      <Menu>
        <div className="title">
          <h1>RocketMovies</h1>
          <h3>Aplicação para acompanhar tudo que assistir.</h3>
        </div>

        <Form>
          <h2>Crie sua conta</h2>

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

          <ButtonText title="Entrar"/>

          <NewAccountButton>
            <FiArrowLeft/>

            <Link to="/">
              
              Criar conta
            </Link>
          </NewAccountButton>

        </Form>
      </Menu>

      <Background>

      </Background>
    </Container>
  )
}