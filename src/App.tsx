import { Route, Routes } from 'react-router';
import Cursor from '@/components/Cursor';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';

function App() {
  return (
    <div className="bg-bg h-screen w-screen py-20">
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/projects" element={<Projects /> } />
      </Routes>
    </div>
  )
}

export default App
