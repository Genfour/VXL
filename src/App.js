import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
