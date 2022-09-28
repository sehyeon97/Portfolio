import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Project1 from './page/Project1';
import Project2 from './page/Project2';
import Project3 from './page/Project3';
import Contact from './page/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Project1" element={<Project1/>}/>
          <Route path="/Project2" element={<Project2/>}/>
          <Route path="/Project3" element={<Project3/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
