import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import Category from "./Category/Category";
import HomeService from '../services/HomePageServices';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const cat = [
    {id: 1, name: 'Komputery', img: "https://media.istockphoto.com/photos/modern-office-desk-background-top-view-with-copy-space-picture-id1133856693?b=1&k=20&m=1133856693&s=170667a&w=0&h=_7xjXLQMZNuqwTnXnJZaBmYX3z3QNZ8opUcf0sLAG5M="},
    {id: 2, name: 'Tablety', img: "https://media.istockphoto.com/photos/working-space-background-picture-id513132398?k=20&m=513132398&s=612x612&w=0&h=LEa66QsVRXaFLWG4IJnGxceRycMH0zpJgBQ_WCNk_zM="},
    {id: 3, name: 'Oprogramowanie', img: "https://media.istockphoto.com/photos/top-view-desk-picture-id840566622?k=20&m=840566622&s=612x612&w=0&h=xrdn1xBawDKYbdcKM3ZRBo8pkDSMkRY0SQGZF2R68PU="},
    {id: 4, name: 'Myszki', img: "https://media.istockphoto.com/photos/desk-top-view-with-laptop-picture-id1128420679?k=20&m=1128420679&s=612x612&w=0&h=59BuG5_DRsKblmaX0CJedcWP_TM0H04WEFuXHuZXlzQ="},
    {id: 5, name: 'Klawiatury', img: "https://media.istockphoto.com/photos/joystick-keyboard-and-mouse-with-rgb-light-gamers-workspace-neon-picture-id1313504860?k=20&m=1313504860&s=612x612&w=0&h=mtqyKfB8W3J6gAt2Z2qOwhS9TEU0P7MGZY49KKCN7Y0="},
    {id: 6, name: 'Słuchawki', img: "https://media.istockphoto.com/photos/laptop-and-tablet-pc-on-business-desk-picture-id638765512?k=20&m=638765512&s=612x612&w=0&h=LTDzKo8zPNXPGAuOnS64vKNPgztZtt-rI5_dWnX2Jbc="},
    {id: 7, name: 'Monitory', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
    {id: 8, name: 'Podzepoły komputerowe', img: "https://media.istockphoto.com/photos/blank-screen-computer-on-table-with-office-in-the-background-picture-id1266388738?k=20&m=1266388738&s=612x612&w=0&h=ADVlL3vrWuq-AgbYtUhGbpJN4hOgxQQBVLx6KQWMnjw="},
  ]




function Categories() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    HomeService.getAllCategory().then((response) => {
      setCategory(response.data);
     });
   }, []);


    return (
        <Container>
          {category.map((item) => (
            <Category item={item} key={item.id} />
          ))}
        </Container>
      );
}

export default Categories