import React from 'react'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'
import {Link } from "react-router-dom";

const Item = styled.div`
  display: block;
  width: 100%;
  height: 300px;
  color: black;
  margin: 0 15px;
  margin-top: 10px;
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
font-size: 13px;
`


function Sale({item}) {
  return (
    <Item>
      <Link to={"/"+item.categoryModel.cateGoryName+"/"+item.id}  state={{ product_details: item }}>
      <ImgC src = {item.image}/>
      </Link>
      <TitleC>
      <TitleProductName>{item.shortName}</TitleProductName>
      </TitleC>
      <PriceC><Text as='s'>{item.newPrice},00zł</Text></PriceC>
      {item.price},00zł
    </Item>
   
  )
}

export default Sale