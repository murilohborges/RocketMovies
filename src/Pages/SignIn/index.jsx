import { Container, Menu, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { FiLock, FiMail } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";


export function SignIn(){
  const data = useAuth();
  console.log("meu contexto =>", data);

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
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
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