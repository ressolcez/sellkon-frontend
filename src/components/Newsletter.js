import React,{useState} from 'react'
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import HomePageServices from '../services/HomePageServices';

const Container = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: gray;
  color: white;
`;



function Newsletter(e) {

    const [value,setValue] = useState('')

    function sendEmail(){

        HomePageServices.sendNewsLetter(value).then((response) => {
            console.log(response.data);
        });
    }
    
    return (
        <Container>
          <Title>Newsletter</Title>
          <Desc>Bądź na bieżąco z naszymi okazjami.</Desc>
          <InputContainer>
            <Input placeholder="Twój adres e-mail"  onChange={(e) => setValue(e.target.value)}/>
            <Button onClick = {sendEmail}>
              <Send />
            </Button>
          </InputContainer>
        </Container>
      );
}

export default Newsletter