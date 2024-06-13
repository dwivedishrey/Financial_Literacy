import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import star from "../../../assets/star.png"
const Advisorbox = ({ image,name, ratings,price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 0 20px">
      <Box  justifyContent="space-between">
      <Box>
          <img src={image} alt={name} style={{ width: '200px', height: '200px',borderRadius:"5px" }} />
        </Box>
        <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] ,marginTop:"10px"}}
          >
            {name}
          </Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" >
        <Typography variant="h5" sx={{ color: colors.greenAccent[100]}}>
        <img style={{ width:"10px",height:"10px"}} src={star}/> {ratings}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[100] }}
        >
        {price}
        </Typography>
      </Box>
      <Box>
        <Button style={{color:"white",width:"100px",height:"40px",marginTop:"10px",borderRadius:"5px",backgroundColor:"#046789"}}>
            Connect Now
        </Button>
      </Box>
    </Box>
  );
};

export default Advisorbox;
