import React, { useState,useEffect,useContext } from 'react'
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


const Topbar = ({decision}) => {

const [post, setPost] = useState([]);
const {user,setUser} = useContext(UserContext);

  useEffect(() => {
      if(decision === 0){
    HomeService.getAllProducts().then((response) => {
       setPost(response.data);
     });
      } else{
        HomeService.getProductsFromCategory(decision).then((response) => {
            setPost(response.data);
          });  
      }
   }, []);

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
            <StyledLinkLogin to={"/Login"}>
                <MenuItem> <ManSharpIcon fontSize="large"/>Twoje Konto</MenuItem>
                </StyledLinkLogin>
                <MenuItem>
                <Badge badgeContent={1} color="primary">
                 <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </RightThings>
        </Wrapper>
  );
  
}

export default Topbar