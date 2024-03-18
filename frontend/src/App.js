import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeEdit from './pages/EmployeeEdit';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/list" 
              element={<EmployeeList/>} 
            />
            <Route 
              path="/EmployeeForm" 
              element={<EmployeeForm/>} 
            />
            <Route 
              path="/EmployeeEdit" 
              element={<EmployeeEdit/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
