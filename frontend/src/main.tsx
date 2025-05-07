import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Pages/Register.tsx'
import Login from './Pages/Login.tsx'
import { UserProvider } from './Context/useAuth.tsx'
import { ToastContainer } from 'react-toastify'
import ProtectedRoutes from './Routes/ProtectedRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoutes><App/></ProtectedRoutes>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="*" element={<Navigate to="/"/> }/> */}
        </Routes>
        <ToastContainer />
      </UserProvider>
    </Router>
  </>,
)
