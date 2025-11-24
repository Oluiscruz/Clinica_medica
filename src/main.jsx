import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss'
import App from './App.jsx'
import PacienteLogin from './pages/pcLogin.jsx'
import PacienteCadastro from './pages/pcCadastro.jsx';
import MedicoLogin from './pages/medLogin.jsx';
import MedicoCadastro from './pages/medCad.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/paciente/login" element={<PacienteLogin />} />
          <Route path="/paciente/cadastro" element={<PacienteCadastro />} />
          <Route path="/medico/login" element={<MedicoLogin />} />
          <Route path="/medico/cadastro" element={<MedicoCadastro />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
