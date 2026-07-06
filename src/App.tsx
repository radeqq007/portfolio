import { Route, Routes } from 'react-router';
import Cursor from './components/Cursor';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-bg h-screen w-screen py-20">
      <Cursor />


      <Routes>
        <Route path="/" element={<Home />} />  
      </Routes>
    </div>
  )
}

export default App
