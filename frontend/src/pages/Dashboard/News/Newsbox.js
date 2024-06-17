import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}

const NewsBox = ({ image, title, description, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const truncatedDescription = truncateText(description, 20); // Adjusted word limit for a more realistic truncation
  const truncatedTitle = truncateText(title, 10);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      

      borderRadius="10px"
      
    >
      <Box flex="1">
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '120px', borderRadius: '5px' }}
        />
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: '#000000', marginTop: '10px' }}
        >
          {truncatedTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#000000', marginTop: '10px' }}
        >
          {truncatedDescription}
        </Typography>
      </Box>
      <Box mt="10px">
        <a
          href={link}
          style={{
            color: 'white',
            width: '100px',
            height: '40px',
            borderRadius: '5px',
            backgroundColor: '#046789',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <div style={{ textAlign: 'center' }}>Read More</div>
        </a>
      </Box>
    </Box>
  );
};

export default NewsBox;
