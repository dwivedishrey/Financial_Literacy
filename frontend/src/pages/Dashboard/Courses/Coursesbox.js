import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

const Funbox = ({ image,title,subtitles,link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 0 20px">
      <Box  justifyContent="space-between">
        <Box> 
        <Box>
          <img src={image} style={{  height: '120px',borderRadius:"5px" }} />
        </Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[700] ,marginTop:"10px"}}
          >
            {title}
          </Typography>
          <Typography
          variant="body2"
          sx={{ color: colors.grey[500] , marginTop: '10px' }}
        >
          {subtitles}
        </Typography>
        </Box>
        
      </Box>
     
      <Box>
      <a href={link} style={{alignItems:"center", color:"white", width:"100px", height:"40px", marginTop:"10px", borderRadius:"5px", backgroundColor:"#1679AB", display:"flex", justifyContent:"center", alignItems:"center", textDecoration:"none"}}>
    <div style={{textAlign: "center"}}>Enroll Now</div>
</a>

      </Box>
    </Box>
  );
};

export default Funbox;
