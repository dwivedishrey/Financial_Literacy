import {React,useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Main from './pages/Main/Main';
import Line from "./pages/Dashboard/line";

import FAQ from "./pages/Dashboard/faq";

import Geography from "./pages/Dashboard/geography";
import Dashboard from './pages/Dashboard/Dashboard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./pages/Dashboard/theme";
import Sidebar from './pages/Dashboard/global/Sidebar';
import Topbar from './pages/Dashboard/global/Topbar';
import Incomeadd from './pages/Dashboard/Incomeadd/Incomeadd';
import Expenseadd from './pages/Dashboard/Expenseadd/Expenseadd';
import Emicalc from './pages/Dashboard/Calculators/EmiCalc/Emicalc';
import Mortagecalc from './pages/Dashboard/Calculators/MortageCalc/Mortagecalc';
import Calculators from './pages/Dashboard/Calculators/Calculators';
import Quiz from './pages/Dashboard/Gamification/QuizApp/Quiz';
import Income from './pages/Income/Income';
import Transaction from './pages/Dashboard/TransactionHistory/Transaction';
import Advisor from './pages/Dashboard/Advisor/Advisor';
import Funzone from './pages/Dashboard/Gamification/Funzone/Funzone';
import News from './pages/Dashboard/News/News';
import InvestmentCalculator from './pages/Dashboard/Calculators/InvestmentCalc/Investmentcalc';
import Createpost from './pages/Dashboard/Post/CreatePost';
import PostDetail from './pages/Dashboard/Post/PostDetail';
import Stock from './pages/Dashboard/Stock_tracker/stock';
import Rewards from './pages/Dashboard/Rewards/Reward';
import Courses from './pages/Dashboard/Courses/Courses';
import PieChart from './pages/Dashboard/Chart/Pie';
import BarChart from './pages/Dashboard/Chart/Bar';
import Portfolio from './pages/Dashboard/PortfolioDetails/Portfolio';
import Details from './pages/Dashboard/Details';
import PortfolioForm from './pages/Dashboard/PortfolioDetails/Portfolioform';
import Portfolioadd from './pages/Dashboard/PortfolioDetails/Portfolioadd';


function App() {
 
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/page-loading' element={<PageLoading />} />
          <Route path='/add-income' element={<Income />} />
          <Route path='/dashboard/*' element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function DashboardRoutes() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/details' element={<Details />} />
              <Route path="incomeadd" element={<Incomeadd />} />
              <Route path="/expenseadd" element={<Expenseadd />} />
              <Route path="/emicalc" element={<Emicalc />} />
              <Route path="/mortagecalc" element={<Mortagecalc />} />
              <Route path="/investmentcalc" element={<InvestmentCalculator />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/advisor" element={<Advisor />} />
              <Route path="/funzone" element={<Funzone />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/createpost" element={<Createpost />}></Route>
              <Route path="/reward" element={<Rewards />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/news" element={<News />} />
              <Route path="/portfolio" element={<Portfolioadd />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/profile" element={<Details />} />
              
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
           
              <Route path="/geography" element={<Geography />} />
              {/* Other dashboard related routes */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
