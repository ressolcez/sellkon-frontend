import React, { useState,useEffect,useContext } from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import HomePageServices from '../services/HomePageServices';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    margin-top:10%;
    text-align: center;
    border:0.5px solid black;
    width:30%;
    margin-left:35%;
    border-radius:20px;
    padding: 10px;
    
`

const StyledLoginUser = styled.input`
  border-radius:30px;
  margin-top:20px;
  height:50px;
  width: 350px;
  border: 0.5px solid gray;
  padding:15px;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`

const StyledName = styled.input`
  border-radius:30px;
  margin-top:30px;
  height:50px;
  width: 350px;
  border: 0.5px solid gray;
  padding:15px;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`

const StyledLoginPassword= styled.input`
  border-radius:30px;
  margin-top:30px;
  height:50px;
  width: 350px;
  border: 0.5px solid gray;
  padding:15px;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`

const StyledConfirmPassword= styled.input`
  border-radius:30px;
  margin-top:30px;
  height:50px;
  width: 350px;
  border: 0.5px solid gray;
  padding:15px;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`

const StyledLoginBtn = styled.button`
  margin-right:100px;
  border:none;
  background-color:white;
  &:focus {
    border-bottom:1.5px solid green;
    outline: none;
  }
 
`

const StyledRegisterBtn = styled.button`
  border:none;
  background-color:white;
  &:focus {
    border-bottom:1.5px solid green;
    outline: none;
  }
`

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
  }
`

const StyledDesc = styled.div` margin-top:25px; padding:10px;`

const StyledLogo = styled.img` margin-top:20px;`

const StyledDiv = styled.div` margin-top:30px; margin-bottom:50px;`

function LoginComponent() {
  const {user,setUser} = useContext(UserContext);
  const navigate = useNavigate();


  function userExists(username, password,asd) {
   
    return asd.some(function(el) {
      if(el.username === username && el.password === password){
        navigate("/")
      return true
      }else{
        return false
      }
    }); 
  }

  const registerUser = (e) => {

      e.preventDefault();
      const newUser = {username,password,name}
      HomePageServices.registerUser(newUser)
      window.location.reload(false);
  }

  const loginUser = (e) => {
    axios.get('http://localhost:8080/user/Allusers',{
    }).then(response => {

      console.log(userExists(LoginUsername,LoginPassword,response.data))
    }).catch(error =>{
      console.log(error);
    });
}


  const [value, setValue] = useState(0)


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [LoginUsername, setLoginUsername] = useState('')
  const [LoginPassword, setLoginPassword] = useState('')

  function checkLayout(){
    if(value===0){
      return (
      <div>
         <form>
        <div>
         <StyledLoginUser placeholder='E-mail' onChange={(e) => setLoginUsername(e.target.value)}/>
        </div>
        <StyledLoginPassword placeholder='Hasło' type="password" onChange={(e) => setLoginPassword(e.target.value)}/>
        <StyledDiv>
        <Button style={{
        backgroundColor: "green",width:'350px', borderRadius:'20px', height:'40px', outline: 'none'
       }}variant="contained"// onClick={()=>setUser("elo")}
       onClick = {(e) => loginUser(e)}
       >
        Zaloguj się
      </Button>
      </StyledDiv>
      </form>
    </div>
    )
    }else{
      
      return(
        <div>
          <form>
        <div>
         <StyledLoginUser placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <StyledName placeholder='Imie' onChange={(e) => setName(e.target.value)}/>
        <StyledLoginPassword placeholder='Hasło' type="password" onChange={(e) => setPassword(e.target.value)}/>
        <StyledConfirmPassword placeholder='Potwierdź Hasło' type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        <StyledDiv>
        <Button style={{
        backgroundColor: "green",width:'350px', borderRadius:'20px', height:'40px', outline: 'none'
       }}variant="contained" //onClick={()=>localStorage.setItem("user", JSON.stringify(user))}
       onClick = {(e) => registerUser(e)}
       >
        Utwórz konto
      </Button>
      </StyledDiv>
      </form>
    </div>
      );
    }
  }

  return (
    <Container>
       <StyledLink to={"/"}>
       <StyledLogo src = "https://raw.githubusercontent.com/ressolcez/sellkon-frontend/master/Logo.png"/>
        </StyledLink>
        <StyledDesc>
        <StyledLoginBtn onClick = {()=>{setValue(0)}}>Logowanie </StyledLoginBtn>
        <StyledRegisterBtn onClick = {()=>{setValue(1)}}>Nowe konto </StyledRegisterBtn>
        </StyledDesc>
        {
          checkLayout()
        }
    </Container>
  )
}

export default LoginComponent