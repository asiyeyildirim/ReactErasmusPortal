

import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Portal from './Portal.js';

import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import Communication from './component/Communication.js';
import Sartlar from './component/Sartlar.js';
import SifreGuncelle from './component/SifreGuncelle';

function App() {
  return (
 
   
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/sartlar" element={<Sartlar />} />
        <Route path="/sifreguncelle" element={<SifreGuncelle />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/portal/Communication" element={<Communication/>} />
     
      </Routes>
    </Router>

  );
}
export default App;