import {Link} from 'react-router-dom'
import './home.css'

const Home = () =>{
  return(
    <div className="Title">
      <Link to="/" className='Title_inner'>Справочник по JavaScript</Link>
    </div>
  )  
}

export default Home