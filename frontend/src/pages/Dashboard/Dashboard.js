import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";


import StatBox from "./components/StatBox";

import Header from "./components/Header";
import "./Dashboard.css";

import "react-pro-sidebar/dist/css/styles.css";
import FeedIcon from '@mui/icons-material/Feed';
import { useGlobalContext } from "../Context/globalContext";

import PieChart from "./Chart/Pie";
import BarChart from "./Chart/Bar";
import Pieincome from "./Chart/Pieincome";
import InvestmentPieChart from "./Chart/investmentchart";
import BudgetStatus from "./SetBudget/BudgetStatus";
import SetBudget from "./SetBudget/Budget";
import UpcomingPayments from "./PortfolioDetails/InvestmentDate";
import backgroundImage from '../../../src/assets/background8.jpg'; 
import LineChart from "./Chart/LineChart";
import History from "./TransactionHistory/Recent";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { users } = useGlobalContext();
  const { totalBalance ,totalInvestments} = useGlobalContext();
  
  return (
    <Box
    sx={{
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     
    }}
    >
      {/* HEADER */}
      <Box ml="10px">
      <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Financial Overview</h1>
          <p style={{color:"black"}} className="header-subtitle">Get a comprehensive overview of your financial health</p>
        </div>
        <div className="header-set-budget">
          <SetBudget />
        </div>
      </div>
    </div>
     
    
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="10px"
        marginTop="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
          width="290px"
          sx={{
           backgroundColor:' #002147',color:"white"
          }}
        >
          <Typography
          
          fontWeight="900"
          color="red"
          fontSize="1.2rem"
          style={{color:"white"}}
        >
          Total Balance: Rs {totalBalance()}
        </Typography>
        </Box>
        <Box
          gridColumn="span 3"
         
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
          width="290px"
          sx={{
            backgroundColor:' #002147',color:"white"
           }}

        >
            <Typography
          
          fontWeight="600"
          color="black"
          fontSize="1.2rem"
          style={{color:"white"}}
        >
          Total Investments: Rs {totalInvestments()}
        </Typography>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
          width="290px"
          sx={{
            backgroundColor:' #002147',color:"white"
           }}
        >
          <Typography
          variant="h4"
          fontWeight="600"
          color="black"
          style={{color:"white"}}
        >
           <BudgetStatus />
        </Typography>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
          width="290px"
          sx={{
            backgroundColor:' #002147',color:"white"
           }}
        >
           <Typography
          variant="h4"
          fontWeight="600"
          color="white"
          style={{color:"white"}}
        >
           <UpcomingPayments/>
        </Typography>
        
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          
        >
          <Box
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            borderRadius="10px"
          
      flexDirection="column"
  
    
      textAlign="center"
          >
           
              <Typography
                variant="h5"
                fontWeight="600"
                style={{color:"black"}}
              >
                Income V/S Expense(Monthly)
                <LineChart/>
                
              </Typography>
              
           
            <Box>
              
            </Box>
          </Box>
          <Box height="250px" m="2px 2px 2px 2px">
          
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          marginRight="10px"
          display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
        >
        
            <Typography  style={{color:"black",fontWeight:"600",fontSize:"15px" }}>
              Recent Transaction History

             <History/>
            </Typography>
          
         
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
        >
            <Typography color={colors.grey[700]} variant="h5" fontWeight="600" >
            Expenses
            <PieChart/>
            
          </Typography>
          
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
        >
          <Typography style={{color:"black",fontWeight:"600",fontSize:"15px",textAlign: "center" }}>
           
            <BarChart/>
          </Typography>
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"

         
          
        >
         <Typography style={{color:"black",fontWeight:"600",fontSize:"15px" }}>
            Investment
            <InvestmentPieChart />
           
          </Typography>
          
        </Box>
      </Box>
      </Box>
    </Box>

  );
};

export default Dashboard;
