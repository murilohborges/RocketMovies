import { Container, Content, Form, Section } from './styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft } from "react-icons/fi";

export function New(){
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
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
            />
            <Input
              type="text"
              placeholder="Sua nota (de 1 a 5)"
            />
          </div>

          <Textarea 
            placeholder="Observações"
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
              isNew
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
          <ButtonText title="Salvar alterações" />

        </div>
        

      </Content>

      

    </Container>
  )
}