import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className='App'>
      <main className='container mx-auto my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
