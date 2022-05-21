import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import CategoryContent from '../CategoryListComponent/CategoryContent';
import { useLocation } from 'react-router-dom'
import HomePageServices from '../services/HomePageServices';
import PacmanLoader from "react-spinners/PacmanLoader";

const StyledDivider = styled(Divider)`
  color: white;
`

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

const StyledSpinner = styled.div`text-align:center; margin-top:50vh;`


function CategoriesListProduct() {

  const location = useLocation()
  const { from } = location.state

  const [min,setMin] = useState(0)
  const [max,setMax] = useState(0)

  const [filtered,setFiltered] = useState([]);

  const [isLoading, setLoading] = useState(true);


  function handleMinPrice(childData){
    setMin(childData)
  }

  function handleMaxPrice(childData){
    setMax(childData)
  }

  useEffect(() => {
    HomePageServices.getProductsFromCategoryFilteredByPrice(from,min,max).then((response) => {
      setFiltered(response.data);
      setLoading(false)    
  });


  
 }, [min,max]);



 if (isLoading) {
  return (
  <StyledSpinner>
      <PacmanLoader color= 'gray'/>
  </StyledSpinner>
  );
}

  return (
    <StyledCont>
      <Topbar decision={from}/>
      <CategoryContent  handleMaxPrice = {handleMaxPrice} handleMinPrice = {handleMinPrice} filtered = {filtered}/>
      <h1></h1>
      <StyledDivider/>
      <Footer/>
   </StyledCont>
  )
}

export default CategoriesListProduct