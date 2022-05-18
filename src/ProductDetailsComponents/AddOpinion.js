import React, {useState, useEffect,useContext} from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Rating from "@mui/material/Rating";
import HomeService from '../services/HomePageServices';
import { UserContext } from '../context/UserContext';

const Cont = styled.div`
  margin-top: 30px;
  text-align:center;
  display:block;
`

const StyledInput = styled.textarea`
    width: 600px;
    height: 100px;
    border: 0.5px solid gray;
    border-radius: 20px;
    word-wrap: break-word;
    word-break: break-all;
    padding: 8px;
    &:focus {
      outline: none;
      &::placeholder {
      }
    }
`

const BtnCont = styled.div`
    margin-top:5px;
`

const RatingCont = styled.div`

`



function AddOpinion({item}) {

  const [comment, setValue] = useState('');
  const [rating,setRatingVal] = useState(0)
  let {user,setUser} = useContext(UserContext);


  const addProduct = (e) => {
    let user_id= user.id;

    const opinion = {comment,rating};
    HomeService.addOpinion(item,user_id,opinion).then((response) =>{
      console.log(response.data)
      }).catch(error => {
         console.log(error)
      })
      window.location.reload(false);
  
  }

  function checkUserLogin(){

    if(user.id===0){
      return <h5>Zaloguj się aby dodać opinie</h5>;
    }else{
      return(
        <div>
           <form>
         <RatingCont>
      <Rating
      name="simple-controlled"
      value={rating}
      onChange={(event, newValue) => {
        setRatingVal(newValue);
      }}
      />
      </RatingCont>
      <StyledInput placeholder = "Wprowadź opinie "name="text" multiline={true}  onChange={(e) => setValue(e.target.value)}/>
      <BtnCont>
      <Button onClick = {(e) => addProduct(e)} style={{
        backgroundColor: "gray",
       }}variant="contained" endIcon={ <ContentPasteIcon />} >
        Dodaj Opinie
      </Button>
      </BtnCont>
      </form>

        </div>
      );
    }
  }


  return (
    <Cont>
    {checkUserLogin()}
    </Cont>
  );
}

export default AddOpinion