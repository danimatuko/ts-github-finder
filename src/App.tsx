import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center text-5xl font-bold text-pink-600 my-12'>
        GITHUB FINDER
      </h1>
      <main className='container mx-auto my-5'>
        <div className='grid grid-cols-4 gap-4'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
