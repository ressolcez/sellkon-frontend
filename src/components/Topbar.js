import React, { useState,useEffect,useContext,useRef } from 'react'
import styled from "styled-components";
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from "@material-ui/core";
import SearchBar from './SearchBar';
import HomeService from '../services/HomePageServices';
import { IoSearch } from "react-icons/io5";
import {Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ManSharpIcon from '@mui/icons-material/ManSharp';
import { UserContext } from '../context/UserContext';
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const StyledStack = styled(Stack)`
z-index: 5;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 20px;
    left:745px;
    top: 20px;
    position: absolute;
    vertical-align: middle;
`;

const Logo = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    height: 10px;
    margin-bottom: 25px;
`

const LogoContainer = styled.div`
    font-weight: bold;
`

const Search = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 10px;
`
const RightThings = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
  }
`

const StyledLinkLogin = styled(Link)`
  color: black;
  &:hover{
    color: black;
  }
`

const StyledButton = styled(Button)` 
 color:black;
`


const Topbar = ({decision}) => {

const [post, setPost] = useState([]);
let {user,setUser} = useContext(UserContext);

const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef(null);

const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
};


function handleListKeyDown(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
  } else if (event.key === 'Escape') {
    setOpen(false);
  }
}



  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;


      if(decision === 0){
     HomeService.getAllProducts().then((response) => {
       setPost(response.data);
     });
      } else{
        HomeService.getProductsFromCategory(decision).then((response) => {
            setPost(response.data);
          });  
      }
   }, [open]);

   const prevOpen = React.useRef(open);

   const logout = (event) =>{

    let newUser = 0;
    user = {id: newUser};
  
    localStorage.setItem("user", JSON.stringify(user))
    window.location.reload(false);

   }

   const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
  
    setOpen(false);
  };


   function checkUserState(){
    if(user.id===0){
        return(
        <div>
          <StyledLinkLogin to={"/Login"}>
                <MenuItem> <ManSharpIcon fontSize="large"/>Zaloguj się</MenuItem>
            </StyledLinkLogin>
            </div>
        );
        

    }else{
      return (
        <StyledStack direction="row" spacing={2}>
          <div>
          
            <Button
              ref={anchorRef}
              onClick={handleToggle}
              variant="outlined"
              color ='success'
              startIcon = {<AccountCircleOutlinedIcon/>}
              style={{
                color:'black',
                border:"none",
                backgroundColor:'white',
                minWidth:'150px'
               }}
            >
              {user.name}
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom"
                  }}
                >
                 
                  <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        onKeyDown={handleListKeyDown}
                        style={{minWidth:'150px'}}
                        dense
                      >
                        <MenuItem onClick={handleClose} style ={{marginTop:'8px', marginBottom:'5px',textAlign:'center'}}>
                          <ManageAccountsOutlinedIcon />
                          Profil
                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={logout} style ={{marginTop:'8px', marginLeft:'15px',textAlign:'center'}}>
                          <ExitToAppOutlinedIcon/>
                          Wyloguj
                        </MenuItem>
                      </MenuList>
                      </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </StyledStack>
      );
    }
   }



  return(
        <Wrapper>
            <Logo>
                <LogoContainer>
                <StyledLink to={"/"}>
                <img src = "https://raw.githubusercontent.com/ressolcez/sellkon-frontend/master/Logo.png"/>
                </StyledLink>
                 </LogoContainer>
            </Logo>
            <Search>
                <SearchIcon>
                    <IoSearch/>
                </SearchIcon>
                <SearchBar placeholder="Wprowadź nazwę szukanego sprzętu" data={post} />
            </Search>
            <RightThings>
            <StyledLink to={"/Cart"}>
                <MenuItem>
                 <ShoppingCartOutlined />
                </MenuItem>
            </StyledLink>
                {checkUserState()}
            </RightThings>
        </Wrapper>
  );
  
}

export default Topbar