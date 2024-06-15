import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const Funbox = ({ image,name,link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 0 20px">
      <Box  justifyContent="space-between">
      <Box>
          <img src={image} alt={name} style={{ width: '150px', height: '150px',borderRadius:"5px" }} />
        </Box>
        <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[700] ,marginTop:"10px"}}
          >
            {name}
          </Typography>
        </Box>
        
      </Box>
     
      <Box>
      <a href={link} style={{alignItems:"center", color:"white", width:"100px", height:"40px", marginTop:"10px", borderRadius:"5px", backgroundColor:"#046789", display:"flex", justifyContent:"center", alignItems:"center", textDecoration:"none"}}>
    <div style={{textAlign: "center"}}>Play Now</div>
</a>

      </Box>
    </Box>
  );
};

export default Funbox;
