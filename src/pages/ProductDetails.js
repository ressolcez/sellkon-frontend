import React from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import styled from 'styled-components';

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

function ProductDeatails() {
  return (
    <StyledCont>
      <Topbar decision={0}/>
      <Footer/>
   </StyledCont>
  )
}

export default ProductDeatails