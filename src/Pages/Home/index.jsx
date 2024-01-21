import { Container, NewNote } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";
import { api } from "../../service/api";


export function Home() {
  return(
    <Container>
      <Header></Header>

      <div className="title">
          <h1>Meus filmes</h1>
          <NewNote to='/new'>
            <FiPlus />
            Adicionar filme  
          </NewNote>
      </div>

      <main>
        <Note data={{
          title: 'Velozes e furiosos',
          description: "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado",
          rating: 1,
          tags: [
            {id: 1, name: 'Ação'},
            {id: 2, name: 'Carros'},
            {id: 3, name: 'Família'},
          ]
        }}/>
        <Note data={{
          title: 'Velozes e furiosos',
          description: "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado",
          rating: 1,
          tags: [
            {id: 1, name: 'Ação'},
            {id: 2, name: 'Carros'},
            {id: 3, name: 'Família'},
          ]
        }}/>
        <Note data={{
          title: 'Velozes e furiosos',
          description: "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado",
          rating: 1,
          tags: [
            {id: 1, name: 'Ação'},
            {id: 2, name: 'Carros'},
            {id: 3, name: 'Família'},
          ]
        }}/>
        
        
      </main>

      
    </Container>
  )
}