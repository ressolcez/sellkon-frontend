import React from 'react'
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import CategoryContent from '../CategoryListComponent/CategoryContent';
import { useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar';

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`



function CategoriesListProduct() {

  const location = useLocation()
  const { from } = location.state

  return (
    <StyledCont>
      <Topbar decision={from}/>
      <CategoryContent state={{ from: from }}/>
      <StyledDivider/>
      <Footer/>
   </StyledCont>
  )
}

export default CategoriesListProduct