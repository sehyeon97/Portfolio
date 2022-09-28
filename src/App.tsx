import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/HomePage';
import Fluids from './page/FluidsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Chapter15_Fluids" element={<Fluids/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
