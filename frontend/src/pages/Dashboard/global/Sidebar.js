import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import QuizIcon from '@mui/icons-material/Quiz';
import GradeIcon from '@mui/icons-material/Grade';
import { useGlobalContext } from "../../Context/globalContext";
import HubIcon from '@mui/icons-material/Hub';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CasinoIcon from '@mui/icons-material/Casino';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      
      <Typography>{title}</Typography>
      <Link to={to.trim()}/>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [selected, setSelected] = useState("Dashboard");
  const { users } = useGlobalContext();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
  
      console.log('User signed out');
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#002147 !important`,
          height:"100%"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ArthaMarga
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <AccountCircleIcon
                  alt="profile-user"
                  style={{ fontSize: 50 }}
                  
      
                />
             
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="My investment Suite"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              My Data
            </Typography>
            <Item
              title="Update Your Profile"
              to=" /dashboard/profile"
              icon={<PersonOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Incomes"
              to=" /dashboard/incomeadd"
              icon={<CurrencyRupeeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Expenses"
              to="/dashboard/expenseadd"
              icon={<AddShoppingCartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Investment"
              to="/dashboard/portfolio"
              icon={<PermIdentityIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transaction History"
              to="/dashboard/transaction"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

<Item
              title="Courses"
              to="/dashboard/courses"
              icon={<SchoolIcon />}
              selected={selected}
              setSelected={setSelected}
            />
      
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Tools
            </Typography>
            <Item
              title="Calculators"
              to="/dashboard/calculators"
              icon={<CalculateIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
           
             <Item
              title="Financial News"
              to="/dashboard/news"
              icon={< NewspaperIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Gamefication
            </Typography>
            <Item
              title="Cash Crunch Quiz"
              to="/dashboard/quiz"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Finance Fun Zone"
              to="/dashboard/funzone"
              icon={<CasinoIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reward Section"s
              to="/dashboard/reward"
              icon={<GradeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Finance Connect
            </Typography>
            <Item
              title="AdvisorHub"
              to="/dashboard/advisor"
              icon={<ConnectWithoutContactIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Financial Quora"
              to="/dashboard/createpost"
              icon={<HubIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <p style={{fontSize:"20px",fontWeight:"600",cursor:"pointer"}} onClick={handleLogout}>Logout</p> 
           
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
