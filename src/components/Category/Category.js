import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  width: 500px;
  height: 350px;
  display: flex;
  padding: 5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#F08080;
    margin-bottom: 20px;
`;



function Category({item}) {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.cateGoryName}</Title>
      </Info>
    </Container>
  )
}

export default Category