import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import Rating from "@mui/material/Rating";
import HomeService from '../services/HomePageServices';

const StyledDivider = styled(Divider)`
  color: white;
  `
const Container = styled.div`
  height:100%;
  padding: 0;
  margin-top: 10px;
`

const InsideCont = styled.div`
  width:100%;
  height:100%;
  margin-bottom: 10px;
`

const Col1 = styled.div`
  width:50%;
  height:100%;
  float:left;
`

const StyledComment = styled.div`
  margin-left: 50%;
`

const Col2 = styled.div`display:block`

const handleAvatar = (rating) => {

  if(rating >= 3.0){
  return <InsertEmoticonOutlinedIcon/>;
  }else{
    return <SentimentDissatisfiedOutlinedIcon/>;
  }

}
function Opinions({item}) {

  return (
    <Container>
      <InsideCont>
      <Col1>
      {handleAvatar(item.rating)} {item.userModel.name}
      </Col1>
      <Col2>
      <Rating name="read-only" value={item.rating} readOnly size="small"/>
      <StyledComment>{item.comment}</StyledComment>
      </Col2>
      </InsideCont>
      <StyledDivider/>
      </Container>
  );
}

export default Opinions