import React, { useState,useEffect } from 'react'
import styled from "styled-components";

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
`

const StyledDataItem = styled.a`
    width: 100%;
    height: 60px;
    display: flex;
    color: black;
`

const ImgC = styled.img`
  max-width: 70px;
  max-height: 70px;
`

const TitleProductName = styled.text`
  font-size: 10px;
  width: 100px;
`

const TitleC = styled.div`
  margin-bottom:10px;
`


function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    console.log(data)
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
                 <ImgC src = {value.image}/>
                    <TitleC>
                    <TitleProductName>{value.shortName}</TitleProductName>
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