import { Container } from "./styles";
import starFilled from "../../assets/starFilled.svg";
import starEmpty from "../../assets/starEmpty.svg";
import { Tag } from '../Tag';

export function Note({ data, ...rest}){
  return(
    <Container {...rest} >
      <h1 >{data.title}</h1>

      
        
      <div className="rating">
        { 
          data.rating &&
          <>{Array.from({ length: 5 }).map((_, index) => data.rating >= index + 1 ? <img src={starFilled}/> : <img src={starEmpty}/> )}</>
        }
      </div>

      

      

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </footer>
        
      }
      
    </Container>
  )
}