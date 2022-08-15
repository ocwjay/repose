import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <StartingPage /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
