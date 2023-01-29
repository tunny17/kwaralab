import './App.css';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Patient from './pages/Patients/Patient';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/dashboard'  element={<Dashboard />} />
        <Route  path='/Patient'  element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
