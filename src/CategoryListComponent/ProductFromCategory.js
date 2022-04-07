import React from 'react'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`;

const Item = styled.div`
  display: block;
  width: 100%;
  height: 230px;
  color: black;
  margin: 0 15px;
`

const ImgC = styled.img`
  width: 200px;
  height: 130px;
`

const TitleProductName = styled.text`
  font-size: 15px;
`

const TitleC = styled.div`
margin-bottom:10px;
margin-top:10px;
`

const PriceC = styled.div`
font-size: 10px;
`



function ProductFromCategory({item}) {
    return (
      <Container>
  
       <Item>
      <ImgC src = {item.img}/>
      <TitleC>
      <TitleProductName>{item.nazwa}</TitleProductName>
      </TitleC>
      <PriceC><Text as='s'>{item.cena},00zł</Text></PriceC>
      {item.cena},00zł
    </Item>
    </Container>
      )
}

export default ProductFromCategory