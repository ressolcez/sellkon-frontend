import React from 'react'
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  display: relative;

  
`;

const Info = styled.div`
  position: absolute;
  width: 40px;
  border-radius: 25px;
  height: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px;
  border-color: red;
`;

const InfoDesc = styled.text`
font-size: 10px;

`

const ImgCont = styled.div`
   display:flex;
   flex:1;
`

const ImgC = styled.img`
    height: 50%;
    width: 40%;
`
const StyledDesc = styled.div`
    padding: 10px;
   
`

const StyledName = styled.text`
  font-size: 20px;
  font-weight: bold;
`

const StyledPrice = styled.text`
  font-size: 15px;
`


function Product({ item }) {
  return (
    <Container>  
       <Info>
        <InfoDesc>Polecane </InfoDesc>
      </Info>
      <Link to={"/Product/" + item.id}>
          <ImgCont>
          
              <ImgC src = {item.image}/>
            
           </ImgCont>
           </Link>
        <StyledDesc>
                <StyledName >{item.shortName}
                </StyledName>
                     <h1></h1>
                <StyledPrice>{item.price},00 zł</StyledPrice>
        </StyledDesc>   
    </Container>
  );
}

export default Product