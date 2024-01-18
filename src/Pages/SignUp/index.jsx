import { useState } from "react";
import { Container, Menu, Form, Background, NewAccountButton } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { FiUser, FiArrowLeft, FiLock, FiMail } from "react-icons/fi";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }).catch(error => {
      if(error.respose){
        alert(error.respose.data.message);
      }else {
        alert("Não foi possível cadastrar");
      }
    })
  }

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
            onChange={e => setName(e.target.value)}
          />
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

          <ButtonText title="Entrar" onClick={handleSignUp}/>

          <NewAccountButton>
            <FiArrowLeft/>

            <Link to="/">
              
              Entre com sua conta
            </Link>
          </NewAccountButton>

        </Form>
      </Menu>

      <Background>

      </Background>
    </Container>
  )
}