import {useState} from 'react'
import {ProSidebar,Menu,MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import { tokens } from '../../../../theme';
// import {} from "../../../../../public/"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

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
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed]=useState(false)
    const [selected,setSelected] =useState('Dashboard')
  return (
    <Box sx={{'& .pro-sidebar-inner':{
        background:`${colors.primary[400]} !important`
    },
    "& .pro-icon-wrapper":{
        backgroundColor:'transparent !important'
    },
    "& .pro-inner-item":{
        padding:'5px 35px 5px 20px !important'
    },
    "& .pro-inner-item:hover":{
        color:"#868dfb !important"
    },
    "& .pro-menu-item.active":{
        color:"#6870fa !important"
    }
    }} height={'104vh'}  >
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
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src='https://avatars.githubusercontent.com/u/107461174?v=4'
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Shiv
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} gap={'10px'} >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders"
              to="/order"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="User's Info"
              to="/users"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="All Products"
              to="/allProducts"
              icon={<BallotRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Product"
              to="/addproduct"
              icon={<AddShoppingCartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
        
    </Box>
  )
}

export default Sidebar