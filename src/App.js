import './App.css';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Courses from './Pages/Courses/Courses'
import Youtube from './Pages/Youtube/Youtube'
import Documentation from './Pages/Documentation/Documentation'
import Home from './Components/Home/Home';
import Telegram from './Pages/Telegram/Telegram'
import Blogger from './Pages/Blogger/Blogger'



function App() {
  return ( 
    <div className="App">
      < Home/>
      <Routes>      
        <Route path="/" element={<Header />  } />  
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/telegram" element={<Telegram  />} />
        <Route path="/blogger" element={<Blogger  />} />    
      </Routes>
    </div>
  );
}

export default App;
