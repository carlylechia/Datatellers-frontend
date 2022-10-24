import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
