import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Carousel, { consts } from "react-elastic-carousel";
import Sale from './Sale'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import HomeService from '../services/HomePageServices';

const breakPoints = [
  { width: 1000, itemsToShow: 6 },
];

const StyledContainer = styled.div`
  height:300px;
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    margin-top: 70px;
    border: none;
    background-color: #fef6f6;
    :focus {outline:none;}
    border-radius: 50%;
`

const Sales = ({sales}) => {  

  return (
    <StyledContainer>
      <h1>Przeceny!</h1>
    
        <Carousel breakPoints={breakPoints} 
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <ArrowLeftOutlined/> : <ArrowRightOutlined/>
          return <Button onClick={onClick}>{pointer}</Button>

        }}
        pagination = {false}
>
        {sales.map((item) => (
            <Sale item={item} key={item.id} />
          ))}
        </Carousel>
    </StyledContainer>
  );
}

export default Sales