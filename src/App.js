import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ExcelAnalysis from './ExcelAnalysis';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
    <Route path='/excelanalytics' element={<ExcelAnalysis />}/>
    <Route path='/' element={<Home />}/>
    </Routes>
    </Router>
    <Footer />
    </>

  );
}

export default App;
