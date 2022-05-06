import React, { useState,useEffect } from 'react'
import styled from "styled-components";

function Filters({setMinPrice, setMaxPrice}) {


  const StyledContainer = styled.div``

  const StyledMinPrice = styled.input`
  width:70px;
  height: 25px;
  border: 0.5px solid gray;
  border-radius: 20px;
  padding: 5px;

`

const StyledMaxPrice = styled.input`
  width:70px;
  height: 25px;
  border: 0.5px solid gray;
  border-radius: 20px;
  padding: 5px;
`

return (
    <StyledMinPrice
    placeholder='Min'
    onChange={(e) => setMinPrice(e.target.value)}
    /> - 
    <StyledMaxPrice
    placeholder='Max'
    onChange={(e) => setMaxPrice(e.target.value)}

    />
);
}

export default Filters