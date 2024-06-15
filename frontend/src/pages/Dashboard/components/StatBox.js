import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { textDecoration } from "@chakra-ui/react";


const StatBox = ({ title, subtitle, icon, progress,arrow }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[1000] }}
          >
            {title}
          </Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.grey[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
         <a href={arrow} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none",
  color: "inherit"}}>
        <ArrowRightAltIcon />
      </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
