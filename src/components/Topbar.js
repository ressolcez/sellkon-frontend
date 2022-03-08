import React from 'react'
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from "@material-ui/core";


const Container = styled.div`
  height: 60px;
`;

const Input = styled.input`
    border: none;

`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

const Logo = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`
const LogoContainer = styled.div`
    font-weight: bold;
`

const Search = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 50px;
    padding: 5px;
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

const Topbar = () => {
  return(
    <Container>
        <Wrapper>
            <Logo>
                <LogoContainer>
                Tu będzie logo
                 </LogoContainer>
            </Logo>
            <Search>
                <SearchContainer>
                    <SearchIcon style = {{color: "gray", fontSize: 16}}/>
                    <Input/>
                </SearchContainer>
            </Search>
            <RightThings>
                <MenuItem>Rejestracja</MenuItem>
                <MenuItem>Logowanie</MenuItem>
                <MenuItem>
                <Badge badgeContent={2137} color="primary">
                 <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </RightThings>
        </Wrapper>
    </Container>
  );
  
}

export default Topbar