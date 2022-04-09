import React from 'react'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 230px;
  height: 300px;
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

const StyledShortDesc = styled.div`
  font-size: 10px;

`

function ProductFromCategory({item}) {
    return (
      <Container>
       <Item>
      <ImgC src = {item.image}/>
      <TitleC>
      <TitleProductName>{item.shortName}</TitleProductName>
      </TitleC>
      <StyledShortDesc>{item.shortDesc}</StyledShortDesc>
      <PriceC><Text as='s'>{item.newPrice},00zł</Text></PriceC>
      {item.price},00zł
    </Item>
    </Container>
      )
}

export default ProductFromCategory