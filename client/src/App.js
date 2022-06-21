import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <StartingPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
