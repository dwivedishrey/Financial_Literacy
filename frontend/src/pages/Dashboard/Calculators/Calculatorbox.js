import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { textDecoration } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Calculatorbox = ({ title, subtitle,arrow }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 0 20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[700] ,marginTop:"25px"}}
          >
            {title}
          </Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Typography variant="h5" sx={{ color: colors.grey[500] ,marginTop:"25px"}}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.grey[500],marginTop:"150px" }}
        >
         <a href={arrow} style={{ textDecoration: "none",
  color: "inherit"}}>
        <ArrowRightAltIcon />
      </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Calculatorbox;
