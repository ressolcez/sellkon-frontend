import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import ProductFromCategory from './ProductFromCategory';
import Filters from './filters';

const StyledContainer = styled.div`
  postion: relative;
`

const StyledFilter = styled.div`
  display: flex;
  position: absolute;
  top: 180px;
  
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: 350px;
`;

const cat = [
  {id: 1,cena: 2137 ,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/modern-office-desk-background-top-view-with-copy-space-picture-id1133856693?b=1&k=20&m=1133856693&s=170667a&w=0&h=_7xjXLQMZNuqwTnXnJZaBmYX3z3QNZ8opUcf0sLAG5M="},
  {id: 2,cena: 2137 ,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/working-space-background-picture-id513132398?k=20&m=513132398&s=612x612&w=0&h=LEa66QsVRXaFLWG4IJnGxceRycMH0zpJgBQ_WCNk_zM="},
  {id: 3, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/top-view-desk-picture-id840566622?k=20&m=840566622&s=612x612&w=0&h=xrdn1xBawDKYbdcKM3ZRBo8pkDSMkRY0SQGZF2R68PU="},
  {id: 4, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/desk-top-view-with-laptop-picture-id1128420679?k=20&m=1128420679&s=612x612&w=0&h=59BuG5_DRsKblmaX0CJedcWP_TM0H04WEFuXHuZXlzQ="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 6, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 7, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 8, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 9, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 10, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 11, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 12, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  {id: 5, cena: 2137,nazwa: 'Apple5g', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
]



function CategoryContent() {
  return (
    <StyledContainer>
    <StyledFilter>
    <Filters/>
    </StyledFilter>
    <Container>
    {cat.map((product) => (
              <ProductFromCategory item={product} key={product.id} />
        ))}
    </Container>
    </StyledContainer>
  )
}

export default CategoryContent