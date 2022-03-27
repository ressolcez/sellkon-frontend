import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Carousel, { consts } from "react-elastic-carousel";
import Sale from './Sale'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import HomeService from '../services/HomePageServices';


const Item = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  color: black;
  margin: 0 15px;
  font-size: 30px;
`
const breakPoints = [
  { width: 330, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1000, itemsToShow: 4 },
];


const Button = styled.button`
    width: 50px;
    height: 50px;
    margin-top: 70px;
    border: none;
    background-color: #fef6f6;
    :focus {outline:none;}
    border-radius: 50%;

`

const Sales = () => {  

  const [Sales, setSales] = useState([]);

  useEffect(() => {
    HomeService.getSpecialOfferContent().then((response) => {
      setSales(response.data);
     });
   }, []);

  return (
    <main>
      <h1>Przeceny!</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints} 
        
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <ArrowLeftOutlined/> : <ArrowRightOutlined/>
          return <Button onClick={onClick}>{pointer}</Button>

        }}
        
        pagination = {false}
>
        {Sales.map((item) => (
            <Sale item={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </main>
  );
}

export default Sales