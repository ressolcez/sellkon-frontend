import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import {Link } from "react-router-dom";

const StyledInput = styled.input`
    width:300px;
    background-color: white;
    border: none;
    margin-left: 40px;
    padding: 5px;
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
`

const StyledDataResult = styled.div`
    margin-top: 5px;
    width: 350px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    z-index: 2;
    padding: 5px;
`

const StyledDataItem = styled.a`
    width: 100%;
    height: 60px;
    display: flex;
    color: black;
    margin-bottom: 8px;
`

const ImgC = styled.img`
  max-width: 70px;
  max-height: 70px;
`

const TitleProductName = styled.text`
  font-size: 10px;
  width: 100px;
  font-weight: bold;
`

const TitleC = styled.div`
  margin-left: 10px;
`

const StyledPrice = styled.div`
    font-size: 9px;
    text-font:bold;
`

const StyledCategory = styled.div`
    font-size: 11px;
    margin-bottom: 2px;
`





function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.shortName.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
    
    return (
      <div>
        <div>
          <StyledInput
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
         
        </div>
        {filteredData.length != 0 && (
            <StyledDataResult>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <StyledDataItem>
              <Link to={"/"+value.categoryModel.cateGoryName+"/"+value.product_id} state={{ from: value }}>
                 <ImgC src = {value.image}/>
                 </Link>          
                    <TitleC>
                    <TitleProductName>{value.shortName}</TitleProductName>
                    <StyledCategory>{value.categoryModel.cateGoryName}</StyledCategory>
                    <StyledPrice>{value.newPrice},00zł</StyledPrice>
                    </TitleC>
                </StyledDataItem>     
              );
            })}
          </StyledDataResult>
        )}
      </div>
    );
  }

export default SearchBar