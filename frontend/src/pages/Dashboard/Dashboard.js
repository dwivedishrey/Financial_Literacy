import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";


import StatBox from "./components/StatBox";

import Header from "./components/Header";
import "./Dashboard.css";

import "react-pro-sidebar/dist/css/styles.css";
import FeedIcon from '@mui/icons-material/Feed';
import { useGlobalContext } from "../Context/globalContext";
import Chart from "./Chart/Chart";
import PieChart from "./Chart/Pie";
import BarChart from "./Chart/Bar";
import Pieincome from "./Chart/Pieincome";
import InvestmentPieChart from "./Chart/investmentchart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { users } = useGlobalContext();
  const { totalBalance ,totalInvestments} = useGlobalContext();

  return (
    <Box m="20px"  >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

       
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        p="20px"
        borderRadius="10px"
        mb="20px"
        sx={{
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
        
        }}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[500]}
          
          
        >
          Total Balance: Rs {totalBalance()}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        p="20px"
        borderRadius="10px"
        mb="20px"
        sx={{
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
        
        }}
      >
          <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[500]}
        >
          Total Investments: Rs {totalInvestments()}
        </Typography>
        </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="Investment"
            subtitle="Enroll Now"
            progress="0.75"
            arrow="https://youtu.be/Uw_QyeHo8f0?si=egmVnZalqNGPUPwL"
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="Savings"
            subtitle="Enroll Now"
            progress="0.50"
            arrow="https://youtu.be/wXHQjScKPzc?si=dqP-qQ8t-4bij5qa"
            
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="Budgeting"
            subtitle="Enroll Now"
            progress="0.30"
            arrow="https://youtu.be/CbhjhWleKGE?si=95OoxZU9ca1tfBEm"
            
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="Stocks"
            subtitle="Enroll Now"
            progress="0.80"
            arrow="https://youtu.be/Xn7KWR9EOGQ?si=MDVI-VMOC2TWw0xT"
            
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            borderRadius="10px"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[700]}
              >
                Investment
                <InvestmentPieChart />
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[600]}
              >
                
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <FeedIcon
                  sx={{ fontSize: "26px", color: colors.grey[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="2px 2px 2px 2px">
          
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[600]}`}
            colors={colors.grey[100]}
            p="15px"
            borderRadius="10px"
          >
            <Typography color={colors.grey[700]} variant="h5" fontWeight="600">
              Sources of Income
              <Pieincome />
            </Typography>
          </Box>
         
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Month Wise
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            borderRadius="10px"
          >
            
            <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          
            <BarChart/>
          </Typography>
          <Box height="250px" mt="-20px"></Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Expenses
            <PieChart/>
          </Typography>
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Expenses
           
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
