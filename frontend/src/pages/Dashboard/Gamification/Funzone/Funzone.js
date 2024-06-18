import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import "react-pro-sidebar/dist/css/styles.css";
import Funbox from "./Funbox";
import game3 from "../../../../assets/game3.jpg"
import game6 from "../../../../assets/game6.jpg"
import game5 from "../../../../assets/game5.jpg"
import game2 from "../../../../assets/game2.jpg"
import game7 from "../../../../assets/game7.jpg"
import game8 from "../../../../assets/game8.jpg"
const Funzone = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  alignItems="center" mb="80px">
      <h2 style={{color:"black",fontWeight:"900"}}>Finance FunZone</h2>
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
          backgroundColor="white"
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game6}
            name="Stock Market Simulator Game"
            link="https://play.google.com/store/apps/details?id=com.threeinvesteers.app"
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game3}
            name="Business Empire:RichMan"
            link="https://play.google.com/store/apps/details?id=com.ttterbagames.businesssimulator"
            
           
            
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game8}
            name="Rat Race - Business Strategy"
            link="https://play.google.com/store/apps/details?id=com.kidapps.rat_race_2" 
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game5}
            name="Money Tree: Cash Grow Game"
            link="https://play.google.com/store/apps/details?id=com.tapps.idle.clicker.upgrade.moneytree2"
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game2}
            name="Stock Game- Capitalism"
            link="https://play.google.com/store/apps/details?id=com.SyGame.Capitalism"  
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="300px"
          borderRadius="10px"
        >
          <Funbox
            image={game7}
            name="Tycoon-Business Empires Game"
            link="https://play.google.com/store/apps/details?id=com.michael.tycoon_company_manager"
          />
        </Box>
       </Box>
    </Box>
  );
};

export default Funzone;
