import { Container, Content, Title, Historic, Main, Text, StarFilled, StarEmpty } from './styles';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from '../../service/api.js';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { FiArrowLeft, FiClock } from "react-icons/fi";

export function Details(){
  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);

  const params = useParams();
  const navigate= useNavigate();

  function handleBack(){
    navigate("/")
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
          <button onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>
        
          <Title>

            <h1>{data.title}</h1>

            <div className="rating">
              { 
                data.rating &&
                <>{Array.from({ length: 5 }).map((_, index) => data.rating >= index + 1 ? <StarFilled/> : <StarEmpty/> )}</>
              }
            </div>

          </Title>

          <Historic>
            
            <div className="author">
              <img src="https://github.com/murilohborges.png" alt="Foto do Autor" />
              <span>Por Murilo Henrique</span>
            </div>

            <div className="date">
              <FiClock/>
              <span>23/05/22 às 08:00</span>
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