import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Components/Main';

function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path='/' element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
