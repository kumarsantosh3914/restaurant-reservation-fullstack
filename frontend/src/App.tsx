import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
