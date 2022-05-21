import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import Category from "./Category/Category";
import HomeService from '../services/HomePageServices';
import {Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


function Categories({category}) {
    return (
        <Container>
          {category.map((item) => (
          <Link to={"/"+item.cateGoryName } state={{ from: item.category_id }}>
            <Category item={item} key={item.id} />
          </Link>
          ))}
        </Container>
      );
}

export default Categories