import React from 'react'
import styled from "styled-components";
import {Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
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
  padding: 10px;
  color: black;
`;

const Container = styled.div`
  margin: 5px;
  min-width: 280px;
  max-width:280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Title = styled.text`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`

const Desc = styled.text`
  font-size: 14px;
  display: flex;
  margin-bottom: 10px;
`

const Price = styled.text`
  font-size 14px;
  color:green;
`
const StyledButton = styled(IconButton)`
  :focus {outline:none;}
`

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Product({ item }) {

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
    <Image src={item.image} />
      <Info>
      <StyledLink to={"/"+item.categoryModel.cateGoryName+"/"+item.id}  state={{ product_details: item }}>
        <Title>{item.shortName}</Title>
          <Desc>{item.shortDesc}</Desc>
          </StyledLink>
            <Price><b style={{color:'black'}}>Cena: </b>{item.price},00zł
            <StyledButton color="primary" style = {{color:'black'}} onClick={() => handleAddtoCart(item)}>
               <AddShoppingCartIcon />
            </StyledButton>
            </Price>       
      </Info>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Dodano do koszyka
        </Alert>
      </Snackbar>
  </Container>

  );
}

export default Product