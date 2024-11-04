
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GestaoImagem from './views/gestaoImagem.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<GestaoImagem/>}/>
      </Routes>
    </Router>
  );
}

export default App;
