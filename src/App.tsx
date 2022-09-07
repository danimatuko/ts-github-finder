import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <main className='container mx-auto my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
