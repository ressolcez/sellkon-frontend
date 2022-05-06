import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 230px;
  max-width:230px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
const StyledShortDesc = styled.div`
  font-size: 10px;
  margin-bottom: 8px;

`

function ProductFromCategory({item}) {
    return (
      <Container>
       <Item>
       <Link to={"/"+item.categoryModel.cateGoryName+"/"+item.product_id} state={{ from: item }}>
      <ImgC src = {item.image}/>
      </Link>
      <TitleC>
      <TitleProductName>{item.shortName}</TitleProductName>
      </TitleC>
      <StyledShortDesc>{item.shortDesc}</StyledShortDesc>
      {item.newPrice},00zł
    </Item>
    </Container>
      )
}

export default ProductFromCategory