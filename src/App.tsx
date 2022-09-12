import './App.css';
import Container from './component/Container';

function App() {
  return (
    <div className="App">
      <Container canFlip={true} title="Fluids" text="this is my test box" textColor='white'/>
    </div>
  );
}

export default App;
