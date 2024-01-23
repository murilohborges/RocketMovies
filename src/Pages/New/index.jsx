import { Container, Content, Form, Section } from './styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft } from "react-icons/fi";

import { api } from '../../service/api';

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  async function handleNewNote(){
    if(!title) {
      return alert("Digite o título do filme");
    }

    if(!description) {
      return alert("Digite a descrição do filme");
    }

    if(!rating) {
      return alert("Digite a nota do filme");
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }


    api.post("/notes", {
      title,
      description,
      rating,
      tags
    }).then(() => {
      alert("Nota criada com sucesso");
      navigate("/");
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message);
        return 
      }else {
        alert("Não foi possível cadastrar");
        return 
      }
    });

    
  }

  function handleAddTag(){
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(link => link !== deleted));
  }

  return(
    <Container>
      <Header>

      </Header>

      <Content>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

        <Form>
          <h1>Novo filme</h1>

          <div className="wrapper-input">
            <Input
              type="text"
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Sua nota (de 1 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
        </Form>

        <Section>
          <h2>Marcadores</h2>
          
          <div className="wrapper-tags">
            {
              tags.map((tag, index) =>(
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              placeholder="Nova tag" 
              $isNew
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

        </Section>

        <div className="wrapper-button">
          <button className="delete-button" title="Excluir filme">
            Excluir filme
          </button>
          <ButtonText title="Salvar alterações" onClick={handleNewNote} />

        </div>
        

      </Content>

      

    </Container>
  )
}