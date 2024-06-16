import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../components/StatBox";
import Header from "../components/Header";
import './reward.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "react-pro-sidebar/dist/css/styles.css";
import FeedIcon from '@mui/icons-material/Feed';
import Rewardbox from "./Rewardbox";
import image from "../../../assets/9649139_6951-removebg-preview.png"
import { useState } from "react";

const Rewards = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [referralCode] = useState("ACRTIONSFHSHJTYOIU");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied to clipboard!");
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  alignItems="center" mb="40px">
        <Header  title="You Earned It" />
       {/* <Button style={{backgroundColor:"#4cceac",color:"black",fontWeight:"600"}}>Start to Earn</Button> */}
      </Box>
 
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="100px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          className="voucher"
          gridRow="span 2"
          // backgroundColor="#006769"
          
          p="30px"
          borderRadius="10px"
        >
          <Rewardbox
            title="Amazon Vouchers"
            price="50% off"
         
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          className="voucher"
          p="30px"
          borderRadius="10px"
        >
          <Rewardbox
            title="Flipkart Vouchers"
            price="30% off"
         
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          className="voucher"
          p="30px"
          borderRadius="10px"
        >
           <Rewardbox
            title="Amazon Vouchers"
            price="40% off"   
          />
        </Box>
       </Box>
       <Box mt="40px">
        <Typography variant="h5" color='black'>
         Want to earn more?<strong> Refer a friend ;)</strong>
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt="10px">
          <Box>
            <Typography color='#344C64' variant="h6">
              1 Referral = 10 points
            </Typography>
            <Box display="flex" alignItems="center" mt="20px">
              <input
                value={referralCode}
                readOnly
                style={{
                  padding: "15px",
                  marginRight: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <Button style={{backgroundColor:"#344C64",color:"white",fontWeight:"600"}}
                onClick={handleCopyClick}
              >
                Tap to Copy
              </Button>
            </Box>
          </Box>
          
        </Box>
        </Box>
    </Box>
  );
};

export default Rewards;
