import { Box, IconButton, useTheme,MenuItem, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom"; 
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();  
  const handleLogout = async () => {
    try {
      await signOut(auth);

      console.log('User signed out');
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <Box >
      {/* SEARCH BAR */}
      {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >

        
      </Box>
      <button style={{backgroundColor:"#1F2A40",fontSize:"20px",padding:"10px",fontWeight:"600"}} onClick={handleLogout}>Logout</button> */}
      {/* ICONS */}
      {/* <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
       
      </Box> */}
    </Box>
  );
};

export default Topbar;
