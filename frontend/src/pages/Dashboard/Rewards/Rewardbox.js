import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { textDecoration } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Rewardbox = ({ title, price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 0 20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: 'white' ,marginTop:"25px"}}
          >
            {title}
          </Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Typography variant="h4" sx={{ color: 'white' ,marginTop:"25px"}}>
          {price}
        </Typography>
        <Box mt="10px">
         
        <a
          
          style={{
            color: 'blue',
            width: '80px',
            height: '30px',
            borderRadius: '10px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <div style={{ textAlign: 'center' }}>Get</div>
        </a>
      </Box>
      
      </Box>
    </Box>
  );
};

export default Rewardbox;
