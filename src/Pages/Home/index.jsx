import { useState, useEffect } from "react";
import { Container, NewNote } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";
import { api } from "../../service/api";
import { useNavigate } from 'react-router-dom';


export function Home() {
  const [data, setData] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  const childToParent = childdata => {
    setData(childdata);
    console.log(data);
  }

  function handleDetails(id){
    navigate(`/Details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${data}`);
      setNotes(response.data)
    }

    fetchNotes();
  }, [data]);

  

  return(
    <Container>
      <Header childToParent={childToParent}></Header>

      <div className="title">
          <h1>Meus filmes</h1>
          <NewNote to='/new'>
            <FiPlus />
            Adicionar filme  
          </NewNote>
      </div>

      <main>
        {
          notes.map(note => (
            <Note
              key={String(note.id)}
              data={note} 
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
        
        
      </main>

      
    </Container>
  )
}