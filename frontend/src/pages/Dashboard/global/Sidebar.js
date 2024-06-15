import { useState } from "react";
import {ProSidebar , Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { users } = useGlobalContext();
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `black !important`,
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
              title="Dashboard"
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
              Data
            </Typography>
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
              title="Add Portfolio"
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
              icon={<ReceiptOutlinedIcon />}
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
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Currency Convertor"
              to="/calendar"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Stock Market Tracker"
              to="/dashboard/stock"
              icon={<ShowChartIcon />}
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
              title="BrainStorm"s
              to="/dashboard/createpost"
              icon={<HubIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
