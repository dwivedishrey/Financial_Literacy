import './App.css';
import {BrowserRouter,Route,Router, Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Main from './pages/Main/Main';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute> }>
       
      </Route>
    
      <Route path='/' element={<Main />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/page-loading' element={<PageLoading />}/>
      
      
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
