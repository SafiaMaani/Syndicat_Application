import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Authentification/Login';
import ForgetPassword from './Pages/Authentification/ForgetPassword';
import ResetPassword from './Pages/Authentification/ResetPassword';
import Dashboard from './Pages/Dashboard'
import Appartements from './Pages/Dashboard/Appartements'
import Factures from './Pages/Dashboard/Factures'
import Paiements from './Pages/Dashboard/Paiements'
import Residents from './Pages/Dashboard/Residents'
import ProtectDashboard from './Utils/protectDashboard';

function App() {
  return (
    <div className="App">
    <Routes>
      {/* Public Routes */}
      <Route path={'/'} element={<Login />}/>
      <Route path={'/forgetpassword'} element={<ForgetPassword />}/>
      <Route path={'/resetpassword/:token'} element={<ResetPassword />}/>
      {/* Protected Routes */}
      <Route element={<ProtectDashboard />}>
        <Route path={'/dashboard'} element={<Dashboard />}>
          <Route path={'appartements'} element={<Appartements />} />
          <Route path={'factures'} element={<Factures />} />
          <Route path={'paiements'} element={<Paiements />} />
          <Route path={'residents'} element={<Residents />} />
        </Route>
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
