import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Portfolioform from './Portfolioform';
import Header from '../components/Header';

function Portfolio() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box alignItems="center" mb="80px">
        <Header title="Investment Details" />
        <hr />
      </Box>

      {/* GRID & FORM */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="auto"
        gap="20px"
      >
        {/* FORM */}
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Portfolioform />
        </Box>

        {/* Investment Information */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Investment Information
          </Typography>
          {/* Add any additional information or components here */}
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
