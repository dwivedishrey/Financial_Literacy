import React from 'react';
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "./theme";
import StatBox from "./components/StatBox";
import Header from "./components/Header";
import "./Dashboard.css";
import "react-pro-sidebar/dist/css/styles.css";
import FeedIcon from '@mui/icons-material/Feed';
import { useGlobalContext } from "../Context/globalContext";
import PieChart from "./Chart/Pie";
import BarChart from "./Chart/Bar";
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
  const { users, totalBalance, totalInvestments } = useGlobalContext();

  return (
    <Box sx={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      {/* HEADER */}
      <Box ml="10px" mr="10px">
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
        <Grid container spacing={2} marginTop="20px">
          {/* ROW 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              width="100%"
              height="100px" // Fixed height for uniformity
              sx={{ backgroundColor: '#002147', color: "white" }}
            >
              <Typography fontWeight="900" fontSize="1.2rem" style={{ color: "white" }}>
                Total Balance: Rs {totalBalance()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              width="100%"
              height="100px" // Fixed height for uniformity
              sx={{ backgroundColor: '#002147', color: "white" }}
            >
              <Typography fontWeight="600" fontSize="1.2rem" style={{ color: "white" }}>
                Total Investments: Rs {totalInvestments()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              width="100%"
              height="100px" // Fixed height for uniformity
              sx={{ backgroundColor: '#002147', color: "white" }}
            >
              <Typography variant="h4" fontWeight="600" style={{ color: "white" }}>
                <BudgetStatus />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              width="100%"
              height="100px" // Fixed height for uniformity
              sx={{ backgroundColor: '#002147', color: "white" }}
            >
              <Typography variant="h4" fontWeight="600" style={{ color: "white" }}>
                <UpcomingPayments />
              </Typography>
            </Box>
          </Grid>

          {/* ROW 2 */}
          <Grid item xs={12} md={8}>
  <Box 
    backgroundColor={colors.primary[400]} 
    borderRadius="10px" 
    p={2} 
    sx={{ 
      height: { xs: '300px', sm: '200px', md: '300px' }, 
      width: { xs: '90%', sm: '90%', md: '100%' }, 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center' 
    }}
  >
    <Typography 
      variant="h5" 
      fontWeight="600" 
      style={{ color: "black" }} 
      sx={{ 
        marginBottom: '16px', 
        width: '100%', 
        textAlign: 'center' 
      }}
    >
      Income V/S Expense (Monthly)
    </Typography>
    <Box sx={{ flex: 1, width: { xs: '10%', sm: '20%', md: '100%' },marginLeft:{xs: '-400px', sm: '-390px', md: '0px'},marginTop:{xs: '0px', sm: '-60px', md: '0px'}}}>
      <LineChart />
    </Box>
  </Box>
</Grid>

<Grid item xs={12} md={4}>
  <Box 
    backgroundColor={colors.primary[400]} 
    borderRadius="10px" 
    p={2} 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      height: { xs: 'auto', sm: 'auto', md: '100%' },
    }}
  >
    <Typography 
      variant="h6" 
      fontWeight="600" 
      sx={{ 
        color: "black", 
        fontSize: { xs: "14px", sm: "15px", md: "15px" },
        marginBottom: '16px', 
        width: '100%', 
        textAlign: 'center' 
      }}
    >
      Recent Transaction History
    </Typography>
    <Box sx={{ width: '100%', flex: 1 }}>
      <History />
    </Box>
  </Box>
</Grid>


          {/* ROW 3 */}
          <Grid item xs={12} md={4}>
  <Box 
    backgroundColor={colors.primary[400]} 
    borderRadius="10px" 
    p={2} 
    textAlign="center"
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center"
  >
    <Typography 
      color={colors.grey[700]} 
      variant="h5" 
      fontWeight="600" 
      mb={2} // Adding margin bottom for spacing
    >
      Expenses
    </Typography>
    <Box width="100%" display="flex" justifyContent="center">
      <PieChart />
    </Box>
  </Box>
</Grid>

<Grid item xs={12} md={4}>
  <Box 
    backgroundColor={colors.primary[400]} 
    borderRadius="10px" 
    p={3} 
    textAlign="center"
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center"
  >
    <Typography 
      style={{ color: "black", fontWeight: "600", fontSize: "15px" }} 
      mb={2} // Adding margin bottom for spacing
    >
      Cumulative Graph
    </Typography>
    <Box width="100%" display="flex" justifyContent="center">
      <BarChart />
    </Box>
  </Box>
</Grid>

<Grid item xs={12} md={4}>
  <Box 
    backgroundColor={colors.primary[400]} 
    borderRadius="10px" 
    p={2} 
    textAlign="center"
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center"
  >
    <Typography 
      style={{ color: "black", fontWeight: "600", fontSize: "15px" }} 
      mb={2} // Adding margin bottom for spacing
    >
      Investment
    </Typography>
    <Box width="100%" display="flex" justifyContent="center">
      <InvestmentPieChart />
    </Box>
  </Box>
</Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
