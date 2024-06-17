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
import Advisorbox from "./Advisorbox";
import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpg"

const Advisor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  alignItems="center" mb="80px">
      <h2 style={{color:"black",fontWeight:"900"}}>List of Financial Advisor</h2>
      <hr style={{ color: "black", backgroundColor: "black", height: "2px", border: "none" }} />
       
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
          height="350px"
          borderRadius="10px"
        >
          <Advisorbox
            image={image1}
            name="Sophia Caldwell"
            ratings="4"
            price="Rs 500"
           
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="350px"
          borderRadius="10px"
        >
           <Advisorbox
            image={image2}
            name="Eleanor Kingsley"
            ratings="4"
            price="Rs 500"
           
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="350px"
          borderRadius="10px"
        >
          <Advisorbox
            image={image3}
            name="Jacqueline Marshall"
            ratings="5"
            price="Rs 500"
           
            
          />
        </Box>
        
       
       

       </Box>
    </Box>
  );
};

export default Advisor;
