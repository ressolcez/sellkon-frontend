import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'
import {Link } from "react-router-dom";

const Item = styled.div`
  display: block;
  width: 100%;
  height: 150px;
  color: black;
  margin: 0 15px;
  margin-top: 10px;
`

const ImgC = styled.img`
  width: 150px;
  height: 100px;
`

const TitleProductName = styled.text`
  font-size: 12px;
`

const TitleC = styled.div`
margin-top:10px;
`

const StyledPrice = styled.div`
    font-size: 10px;
`

function RecommendedProducts({item,opinions}) {
  
    return (
        <Item>
          <Link to={"/"+item.categoryModel.cateGoryName+"/"+item.id}  state={{ product_details: item, opinions_det: opinions }}>
          <ImgC src = {item.image}/>
          </Link>
          <TitleC>
          <TitleProductName>{item.shortName}</TitleProductName>
          </TitleC>
          <StyledPrice>{item.price},00zł</StyledPrice>
        </Item>
       
      );
    }


export default RecommendedProducts