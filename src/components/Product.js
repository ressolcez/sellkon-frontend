import React from 'react'
import styled from "styled-components";
import {Link } from "react-router-dom";


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
  max-width:280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Title = styled.text`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`

const Desc = styled.text`
  font-size: 14px;
  display: flex;
`

const Price = styled.text`
  font-size 14px;
  color:green;
`


const StyledImage = styled.div``

function Product({ item }) {
  return (
    <Container>
    <Image src={item.image} />
    <Link to={"/"+item.categoryModel.cateGoryName+"/"+item.product_id}  state={{ product_details: item }}>
      <Info>
        <Title>{item.shortName}</Title>
          <Desc>{item.shortDesc}</Desc>
            <Price>{item.newPrice},00zł</Price>       
      </Info>
      </Link>

  </Container>

  );
}

export default Product