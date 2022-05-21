import React,{useState} from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useCart} from "react-use-cart";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 3;
    display: block;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
  margin: 5px;
  max-width:220px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  margin-top:5vh;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Item = styled.div`
  color: black;
  margin: 0 15px;
  align-items: center;
  justify-content: center;
`

const ImgC = styled.img`
  width: 200px;
  height: 130px;
`

const TitleProductName = styled.text`
  font-size: 15px;
  font-weight:15px;
`

const TitleC = styled.div`
  margin-bottom:10px;
  margin-top:10px;
`

const StyledShortDesc = styled.div`
  font-size: 13px;
  margin-bottom: 8px;

`

const InsideInfo = styled.div`
  text-align:center;
  margin-top:80%;
`

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
  }
`

const StyledButton = styled(IconButton)`
  :focus {outline:none;}
`

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ProductFromCategory({item}) {

  const { addItem } = useCart();

  const [open, setOpen] = React.useState(false);

  function handleAddtoCart(products){
    addItem(products);
    setOpen(true);
 }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


    return (
      <Container>
       <Item>
        <ImgC src = {item.image}/>

      <TitleC>
      <TitleProductName>{item.shortName}</TitleProductName>
      </TitleC>
      <StyledShortDesc>{item.shortDesc}</StyledShortDesc>
      <b>Cena:</b> {item.price},00zł 
      <Info>
        <InsideInfo>
        <StyledButton color="primary" style = {{color:'green'}}onClick={() => handleAddtoCart(item)}>
          <AddShoppingCartIcon />
        </StyledButton>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Dodano do koszyka
        </Alert>
      </Snackbar>

        <StyledLink to={"/"+item.categoryModel.cateGoryName+"/"+item.id} state={{ product_details: item }}>
        <StyledButton color="primary" style = {{color:'black'}}>
          <SearchIcon />
        </StyledButton>
        </StyledLink>
        </InsideInfo>
        </Info>
  
    </Item>
    </Container>
      )
}

export default ProductFromCategory