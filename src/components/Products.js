import React, { useState,useEffect } from 'react'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import Product from './Product';
import HomeService from '../services/HomePageServices';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
`;

const Products = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    HomeService.getRecommendedContent().then((response) => {
       setPost(response.data);
     });
   }, []);
  return (
    <Container>
       {post.map((product) => (
              <Product item={product} key={product.id} />
        ))}
    </Container>
  )
}

export default Products