import { Container, Profile } from './styles.js';
import { Link } from 'react-router-dom';
export function Header () {
  return (
    <Container>
      <h1>RocketNotes</h1>

      <div className="input-header">
        <input
          type="text" 
          placeholder='Pesquisar pelo título'
        />
      </div>
      
      <Profile to="/profile">
        <div>
          <strong>Murilo Borges</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/murilohborges.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}
