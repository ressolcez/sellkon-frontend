import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
import styled from 'styled-components';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const StyleRemoveDiv = styled.div`
  margin-Top: 10px;
`

function CartList({item}) {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

  return (
    <Container>
    <Wrapper>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src= {item.image} />
              <Details>
                <ProductName>
                  <b>Product:</b> {item.shortName}
                </ProductName>
                <ProductId>
                  <b>Opis:</b> {item.shortDesc}
                </ProductId>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <ProductAmount>
                <button type="button" class="btn btn-light" 
                 onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                > +</button>
                  {item.quantity}
                <button type="button" class="btn btn-light"
                 onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                > -</button>
                </ProductAmount>
              </ProductAmountContainer>
              <ProductPrice>{item.price * item.quantity},00 zł</ProductPrice>
              <StyleRemoveDiv>
              <button type="button" class="btn btn-danger" style = {{marinTop:'10px'}} onClick={() => removeItem(item.id)}>Usuń z koszyka</button>
              </StyleRemoveDiv>
            </PriceDetail>
          </Product>
          <Hr />
        </Info>
      </Bottom>
    </Wrapper>
  </Container>
  )
}

export default CartList