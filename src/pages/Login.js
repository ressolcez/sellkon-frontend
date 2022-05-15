import React from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import LoginComponent from '../loginComponents/LoginComponent';

const StyledCont = styled.div ``

function Login() {
  return (
    <StyledCont>
    <LoginComponent/>
    </StyledCont>
  );
}

export default Login