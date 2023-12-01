import { Container, StarFilled, StarEmpty } from "./styles";
import { Tag } from '../Tag';

export function Note({ data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      
        
      <div className="rating">
        { 
          data.rating &&
          <>{Array.from({ length: 5 }).map((_, index) => data.rating >= index + 1 ? <StarFilled/> : <StarEmpty/> )}</>
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