import React from 'react'
import Divider from '@material-ui/core/Divider';
import Topbar from '../components/Topbar'
import styled from 'styled-components';
import Footer from '../components/Footer'

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

function Cart() {
  return (
    <StyledCont>
         <Topbar decision = {0}/>

        <Footer/>
    </StyledCont>
  )
}

export default Cart