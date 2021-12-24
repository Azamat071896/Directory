import '../general.css'
import {Container, Row, Col} from 'react-bootstrap'
import DataTwo from '../../bd/dataTwo.json'

const Youtube = () =>{
    return(
     <Container className='pb-5'>
    <div className="general__title">Youtube Каналы</div>
     <Row >
      {
        DataTwo.map(el => {
         return(
          <Col className='mt-4' xs={3}>
          <div className="general__card">
           <div className="content">  
            <img src={el.image} alt="" className="photo" />
          </div>
           <h3 className="general__name">{el.name}</h3>
          <p className="general__description">{el.description}</p>
          <a className='general__link' target="_blank" href={el.link}>{el.linkName}</a>
          </div>
         </Col>
         )
        })
      }    
     </Row>
    </Container>
    )  
  }
  
  export default Youtube