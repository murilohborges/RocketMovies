import { Container, Profile } from './styles.js';
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../hooks/auth.jsx';
import { Link } from 'react-router-dom';

export function Header () {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div className="input-header">
        <input
          type="text" 
          placeholder='Pesquisar pelo título'
        />
      </div>
      
      <Profile to="/profile" >
        <div className="profile-wrapper">
          <strong>Murilo Borges</strong>
          <img src="https://github.com/murilohborges.png" alt="Foto do usuário" to="/profile"/>
        </div>
        
      </Profile>

      <button onClick={signOut}>
        <FiLogOut />
      </button>
    </Container>
  )
}
