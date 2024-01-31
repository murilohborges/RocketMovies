import { Container, Content, Title, Historic, Main, Text } from './styles';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from '../../service/api.js';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useAuth } from '../../hooks/auth.jsx';

import starFilled from "../../assets/starFilled.svg";
import starEmpty from "../../assets/starEmpty.svg";

export function Details(){
  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);

  const params = useParams();
  const navigate= useNavigate();
  const { user } = useAuth();

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header ></Header>

      {
        data &&
        <Content>

          <div className="wrapper-button">
            <button onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>

            <ButtonText title={"Excluir nota"} onClick={handleRemove} />
          </div>
          
        
          <Title>

            <h1>{data.title}</h1>

            <div className="rating">
              { 
                data.rating &&
                <>{Array.from({ length: 5 }).map((_, index) => data.rating >= index + 1 ? <img src={starFilled}/> : <img src={starEmpty}/> )}</>
              }
            </div>

          </Title>

          <Historic>
            
            <div className="author">
              <img src={`${api.defaults.baseURL}/files/${user.avatar}`} alt="Foto do Autor" />
              <span>Por {user.name}</span>
            </div>

            <div className="date">
              <FiClock/>
              <span>{data.created_at}</span>
            </div>

          </Historic>

          <Main>
            
            <div className="tags">
              
              {
                data.tags && 
                data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                
              }
              
            </div>
              
            <Text>
              <article>{data.description}</article>
            </Text>

          </Main>

      </Content>
      }

    </Container>
  )
}