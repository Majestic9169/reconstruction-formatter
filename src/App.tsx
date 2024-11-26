import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default App
