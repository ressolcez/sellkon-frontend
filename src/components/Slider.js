import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import HomeService from '../services/HomePageServices';
import {Link } from "react-router-dom";



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;

`

const Arr = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fef6f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${propos=> propos.direction === "left" && "10px"};
    right: ${propos=> propos.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 1px;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 2s ease;

`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgCont = styled.div`
    height: 80%;
    flex: 1;
`
const ImgC = styled.img`
    height: 80%;
`

const InfCont = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 400px;
`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`


const Slider = () => {

    const[slideIndex,setSlideIndex] = useState(0);
    const [post, setPost] = useState([]);

    useEffect(() => {
       HomeService.getSliderContent().then((response) => {
          setPost(response.data);
        });
      }, []);

    const handleClick =(dir) =>{

        if(dir==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }


  return (
    <Container>
        <Arr direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arr>
        <Wrapper slideIndex = {slideIndex}>
            {post.map((post2)=>(
            <Slide bg = {post2.bg} key={post2.id}>
            <ImgCont>
                 <Link to={"/Product/"+post2.id} state={{ from: post2.id }}>
                     <ImgC src = {post2.image}/>
                  </Link>
            </ImgCont>
            <InfCont>
                <Title>{post2.shortName}</Title>
                <Desc>{post2.shortDesc}</Desc>
            </InfCont>
            </Slide>
            ))}
        </Wrapper>
        <Arr direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arr>
    </Container>
    
  )
}

export default Slider