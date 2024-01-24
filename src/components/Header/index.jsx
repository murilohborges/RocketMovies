import { useState, useEffect } from "react";
import { Container, Profile } from './styles.js';
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../hooks/auth.jsx';
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg';
import { api } from '../../service/api.js';

export function Header ({childToParent}) {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [ search, setSearch ] = useState("");

  useEffect(() => {
    async function fetchSearch(){
      if(childToParent) {
        childToParent(search);
      }
    }

    fetchSearch();
  },[search]);

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div className="input-header">
        <input
          type="text" 
          placeholder='Pesquisar pelo título'
          onChange={(e) => setSearch(e.target.value)}
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
