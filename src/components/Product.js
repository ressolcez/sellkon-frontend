import React from 'react'
import styled from "styled-components";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 3;
  display: block;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 10px;
  color: black;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
  
`;

const Title = styled.text`
  font-size: 15px;
  font-weight: bold;

`

const Desc = styled.text`
  font-size: 10px;
`

const Price = styled.text`
  font-size 9px;
`



function Product({ item }) {
  return (
    <Container>
    <Circle />
    <Image src={item.image} />
      <Info>
        <Title>{item.shortName}</Title>
        <h1></h1>
          <Desc>{item.shortDesc}</Desc>
          <h1></h1>
            <Price>{item.price},00zł</Price>
      <h1></h1>
      </Info>
  </Container>
  );
}

export default Product