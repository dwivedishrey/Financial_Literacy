import React, { useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Portfolioform from './Portfolioform';
import Header from '../components/Header';
import { useGlobalContext } from '../../Context/globalContext';

function Portfolio() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { getInvestments, investments } = useGlobalContext();

  useEffect(() => {
    getInvestments();
  }, []);

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
          p="30px"
        >
         
        </Box>

        {/* Investment Information */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
          sx={{color:'black'}}
        >
          <Typography variant="h5" fontWeight="600" sx={{color:'black'}}> 
            Investment Information
          </Typography>
          <Box mt="20px">
            {investments.length > 0 ? (
              investments.map((investment) => (
                <Box key={investment._id} mb="10px" p="10px" sx={{ backgroundColor: 'white', borderRadius: '8px',border:'1px solid black' }}>
                  <Typography variant="h6" style={{ color: 'black' }}>{investment.type}</Typography>
                  <Typography variant="body1" style={{ color: 'black' }}>Amount: Rs {investment.amount}</Typography>
                  <Typography variant="body1" style={{ color: 'black' }}>Purchase Date: {new Date(investment.purchaseDate).toLocaleDateString()}</Typography>
                  <Typography variant="body1" style={{ color: 'black' }}>Current Value: Rs {investment.currentValue}</Typography>
                  <Typography variant="body1" style={{ color: 'black' }}>Expected Growth: {investment.expectedGrowth}%</Typography>
                  <Typography variant="body2" style={{ color: 'black' }}>Description: {investment.description}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1" style={{ color: 'black' }}>No investments found.</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
