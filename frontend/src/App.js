import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Container>
            <Outlet />
        </Container>
    </div>
  );
}

export default App;
