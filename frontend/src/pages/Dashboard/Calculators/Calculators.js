import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../components/StatBox";
import Header from "../components/Header";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "react-pro-sidebar/dist/css/styles.css";
import FeedIcon from '@mui/icons-material/Feed';
import Calculatorbox from "./Calculatorbox";

const Calculators = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  alignItems="center" mb="80px">
      <h2 style={{color:"black",fontWeight:"900"}}>Transaction History</h2>
      <hr style={{ color: "black", backgroundColor: "black", height: "2px", border: "none" }} />

        <p style={{marginTop:"15px",fontSize:"15px",color:"#1679AB"}}>Financial calculators are indispensable tools for anyone looking to make informed financial decisions. Whether you are planning to take out a loan, save for a future goal, or manage your daily expenses, financial calculators provide clarity and direction. They transform complex financial concepts into easily understandable numbers, helping users to visualize their financial future and make well-informed decisions.</p>

       
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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="10px"
        >
          <Calculatorbox
            title="EMI Calculator"
            subtitle="An EMI (Equated Monthly Installment) calculator helps users calculate their monthly loan repayment amount for various types of loans, such as home loans, car loans, personal loans, etc."
            progress="0.75"
            arrow="/dashboard/emicalc"
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="10px"
        >
          <Calculatorbox
            title="Mortage Calculator"
            subtitle="A mortgage calculator is a powerful tool that helps potential homeowners understand the financial implications of taking out a mortgage."
            progress="0.75"
            arrow="/dashboard/mortagecalc"
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="10px"
        >
          <Calculatorbox
            title="Investment Calculator"
            subtitle="An investment calculator is a valuable tool used to estimate the future value of an investment based on various input parameters such as initial investment amount, monthly contributions, investment duration, and expected interest rate or return."
            progress="0.75"
            arrow="/dashboard/investmentcalc"
            
          />
        </Box>
        
       
       

       </Box>
    </Box>
  );
};

export default Calculators;
