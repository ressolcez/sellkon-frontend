import React from 'react'
import Divider from '@material-ui/core/Divider';
import Topbar from '../components/Topbar'
import styled from 'styled-components';
import Footer from '../components/Footer'
import { CartProvider, useCart } from "react-use-cart";
import CartList from '../CartComponents/CartList';
import Button from '@mui/material/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Stripe from "react-stripe-checkout";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
  
`

const StyledDesc = styled.div`margin-top:50px; margin-left:20px;`

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width:80vh;
  height: 38vh;
  margin-left:30vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const EmptyCartDiv = styled.div`
  margin-top:10vh;
  text-align:center;

`
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Cart() {

  const [open, setOpen] = React.useState(false);


  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    emptyCart,
  } = useCart();

  var costBefore = cartTotal
  var afterDisc = costBefore * 0.05
  var finalSum = (cartTotal - afterDisc).toFixed(2)

  async function handleToken(token) {
    console.log(token);
    await axios.post("http://localhost:8080/api/payment/charge", "", {headers: {
      token: token.id,
      amount: finalSum,
    },}).then(() => {
       emptyCart();
       setOpen(true);
       }).catch((error) => {
       alert(error);
       });
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

  function checkCartSize(){
    if (isEmpty){
     return (
     <EmptyCartDiv>
       <h3>Twój koszyk jest pusty</h3>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
         Zrealizowano zamówienie
       </Alert>
     </Snackbar>
     </EmptyCartDiv>
     );
    }else{

      return(
        <>
          <StyledDesc><h4>Twój koszyk: ({totalUniqueItems})</h4></StyledDesc>
            {items.map((item) => (
               <CartList item = {item} key={item.id}/>
            ))}
            <Summary>
            <SummaryTitle>Podsumowanie koszyka</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Koszt:</SummaryItemText>
              <SummaryItemPrice>{cartTotal},00zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Zniżki:</SummaryItemText>
              <SummaryItemPrice>5%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Całkowity koszt:</SummaryItemText>
              <SummaryItemPrice>{finalSum}zł</SummaryItemPrice>
            </SummaryItem>
            <Stripe
              stripeKey="pk_test_51L1I2XD3AfM4zq0xzWOGd1538BPuSqjzGIcPKV3imNQUBgsxgcjL2Vg4DxCMsxVF62bMbpuyEgoG84DGnrrT9LiM007kKZEk4V"
              token={handleToken}
              >
             <Button style={{
                  backgroundColor: "gray",width:'70vh',marginLeft:'25px', height:'40px'}}variant="contained" endIcon={ <ContentPasteIcon />} >
                  Zrealizuj zamówienie
              </Button>
            </Stripe>
          </Summary>
          </>
      );
    }
  }

  return (
    <StyledCont>
         <Topbar decision = {0}/>
          {
            checkCartSize()
          }
        <Footer/>
    </StyledCont>
    
  )
}

export default Cart