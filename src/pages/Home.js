import React from 'react'
import Products from '../components/Products';
import Slider from '../components/Slider';
import Sales from '../components/Sales';
import Topbar from '../components/Topbar'
import styled from 'styled-components';
import { Text } from '@chakra-ui/react'

import Divider from '@material-ui/core/Divider';
import Categories from '../components/Categories';

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 100px;
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
            <h1> </h1>
        <Categories/>
        <h1> </h1>
            <StyledDivider/>
            <h1> </h1>
              <StyledText>
                Polecane Produkty
            </StyledText>
        <Products/>
      </StyledCont>
    </div>
  );
}

export default Home