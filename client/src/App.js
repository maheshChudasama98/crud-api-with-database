import './App.css';

// componets set in routers
import Navbar from './Componets/Navbar';
import LoginCrud from './Componets/Crud operation/LoginCrud';
import FormValid from './Componets/FormComponets/FormValid';
import Useapi from './Componets/Api/Useapi';
import Myapi from './Componets/myApi/Myapi';

// bootstrap link set
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Loginlist from './Componets/Crud operation/Loginlist';


function App() {

;
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/form" element={<FormValid />} />
          <Route path="/api" element={<Useapi />} />
          <Route path="/login" element={<LoginCrud />} /> 
          <Route path="/users" element={<Loginlist />} />
          <Route path="/myapi" element={<Myapi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
