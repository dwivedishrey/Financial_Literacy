import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import "react-pro-sidebar/dist/css/styles.css";
import Coursesbox from "./Coursesbox";
import image1 from "../../../assets/coursera-logo-square.jpg"
import image2 from "../../../assets/khan-academy6250.jpg"
import image3 from "../../../assets/udemy-new-20212512.jpg"
const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  alignItems="center" mb="80px">
        <Header  title="Courses" />
        <hr />
       
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="280px"
          borderRadius="10px"
        >
          <Coursesbox
            image={image1}
            title="Coursera:Learn Essential Financial Literacy Skills"
            link="https://www.coursera.org/learn/financial-planning"
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="280px"
          borderRadius="10px"
        >
          <Coursesbox
            image={image2}
            title="Khna Academy:Finance and capital markets"
            link="https://www.khanacademy.org/economics-finance-domain/core-finance/housing"

          />
        </Box>
       
      
     
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          height="280px"
          borderRadius="10px"
        >
          <Coursesbox
            image={image3}
            title="Udemy:Finance Fundamentals Courses"
            link="https://www.udemy.com/topic/finance/"
          />
        </Box>
       </Box>
    </Box>
  );
};

export default Courses;
