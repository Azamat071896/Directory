import {Container, Row, Col} from 'react-bootstrap'
import './bloger.css'
import DataOne from '../../bd/dataOne.json'


const Blogger = () =>{
  return(
   <Container>
     <div className="bloger__title">It Блогеры</div>
     <Row className="mb-5">  
       {
         DataOne.map(el =>{
          return(
            <Col className='mt-4' xs={4}>
            <div className="bloger__card">
            <div className="sides left-side">
              <h1 className="name">{el.name}</h1>
              <h3 className="profession">{el.profession}</h3>
            </div>
            <div className="sides right-side">
              <h1 className="surname">{el.surname}</h1>
              <h3 className="position">{el.position}</h3>
            </div>
            <div className="back-side">
            <img className='image' src={el.image} alt="..." />
              <div className="aboutMe">
                <p className="about">{el.about}</p>
              <a className='about__link-insta' target="_blank" href={el.insta}>{el.instaName}</a>
              </div>
            </div>
          </div>
            </Col>   
           ) 
         })
       }
     </Row>
    </Container>
  )  
  }
  
  export default Blogger