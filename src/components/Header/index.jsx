import { Container, Profile } from './styles.js';
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../hooks/auth.jsx';
import { Link } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg';
import { api } from '../../service/api.js';

export function Header () {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
          <img src={avatarUrl} alt={user.name} to="/profile"/>
        </div>
        
      </Profile>

      <button onClick={signOut}>
        <FiLogOut />
      </button>
    </Container>
  )
}
