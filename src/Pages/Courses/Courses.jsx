import './courses.css'
import {Container, Row, Col} from 'react-bootstrap'
import Data from '../../bd/data.json'

const Courses = () =>{
  return(
    <Container className='pb-5'>
      <div className="courses__title">Курсы программирования в Кыргызтане</div>
     <Row >
       {Data.map(el =>{
         return(
          <Col className='mt-4' xs={3}>
          <div className="courses__card">
          <div className="courses__front">
          <img src={el.image}  alt="..." />
          </div>
          <div className="courses__back">
            <div className="back__content">
             <h5 className='back__content-title'>{el.title}</h5>
             <p className='back__content-description'>{el.description}</p>
             <div className="back__content-link">
             <a className='back__content-link-site' target="_blank" href={el.site}>{el.siteName}</a>
             <a className='back__content-link-insta' target="_blank" href={el.insta}>{el.instaName}</a>
             </div>
            </div>
          </div>
        </div>
        </Col>
         )
       })}
     
     </Row>
    </Container>
  )  
}

export default Courses