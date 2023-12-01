import { Container, Menu, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { FiLock, FiMail } from "react-icons/fi";

export function SignIn(){
  return(
    <Container>
      <Menu>
        <div className="title">
          <h1>RocketMovies</h1>
          <h3>Aplicação para acompanhar tudo que assistir.</h3>
        </div>

        <Form>
          <h2>Faça seu login</h2>

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

          <Link to="/register">Criar conta</Link>

        </Form>
      </Menu>

      <Background>

      </Background>
    </Container>
  )
}