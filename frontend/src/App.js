import './App.css';
import {BrowserRouter,Route,Router, Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Main from './pages/Main/Main';


import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import { useGlobalContext } from './pages/Context/globalContext';
import Viewincome from './pages/ViewIncome/Viewincome';
function App() {
  const global = useGlobalContext()
  console.log(global);
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/main' element={<Main />}/>
    <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute> }>
       
      </Route>
    
     
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/page-loading' element={<PageLoading />}/>
      
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/income' element={<Income />}/>
      <Route path='/viewincome' element={<Viewincome />}/>


      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;