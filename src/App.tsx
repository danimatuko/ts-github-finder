import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='container mx-auto px-48 my-5'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/:about'
            element={<h1>About</h1>}
          />
          <Route
            path='/:username'
            element={<UserDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
