import React from 'react'
import Products from '../components/Products';
import Slider from '../components/Slider';
import Sales from '../components/Sales';
import Topbar from '../components/Topbar'
import styled from 'styled-components';
import Footer from '../components/Footer'
import Divider from '@material-ui/core/Divider';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

const StyledText = styled.text`
    font-size: 50px;
`

const Home = () => {
  return (
    <div>
      <StyledCont>
        <Topbar />
          <Slider />
          <StyledDivider/>
        <Categories/>
            <StyledDivider/>
              <StyledText>
                Polecane Produkty
            </StyledText>
        <Products/>
        <StyledDivider/>
        <Sales/>
        <Footer/>
      </StyledCont>
    </div>
  );
}

export default Home