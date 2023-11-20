import './App.css';
import MainContent from '../MainContent/MainContent';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/*' Component={MainContent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
