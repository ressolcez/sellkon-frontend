import React, { useState,useEffect } from 'react'
import Products from '../components/Products';
import Slider from '../components/Slider';
import Sales from '../components/Sales';
import Topbar from '../components/Topbar'
import styled from 'styled-components';
import Footer from '../components/Footer'
import Divider from '@material-ui/core/Divider';
import Categories from '../components/Categories';
import HomePageServices from '../services/HomePageServices';
import PacmanLoader from "react-spinners/PacmanLoader";
import Newsletter from '../components/Newsletter';

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

const StyledText = styled.text`
    font-size: 50px;
`

const StyledSpinner = styled.div`text-align:center; margin-top:50vh;`


const Home = () => {

  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [sales, setSales] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    HomePageServices.getSliderContent().then((response) => {
       setPost(response.data);
       setLoading(false);
     });

     HomePageServices.getAllCategory().then((response) => {
      setCategory(response.data);
      setLoading(false);
     });

     HomePageServices.getRecommendedContent().then((response) => {
      setProduct(response.data);
      setLoading(false);
    });

    HomePageServices.getSpecialOfferContent().then((response) => {
      setSales(response.data);
      setLoading(false);
     });
     
   }, []);

   if (isLoading) {
    return (
    <StyledSpinner>
        <PacmanLoader color= 'gray'/>
    </StyledSpinner>
    );
  }


  return (
      <StyledCont>
        <Topbar decision = {0}/>
          <Slider post = {post}/>
          <StyledDivider/>
        <Categories category = {category}/>
            <StyledDivider/>
              <StyledText>
                Polecane Produkty
            </StyledText>
        <Products post = {product}/>
        <StyledDivider/>
        <Sales sales = {sales}/>
        <StyledDivider/>
        <Newsletter/>
        <StyledDivider/>
        <Footer/>
      </StyledCont>
  );
}

export default Home