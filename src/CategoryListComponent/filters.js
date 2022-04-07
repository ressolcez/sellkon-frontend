import React from 'react'
import styled from 'styled-components';

const StyledFilters = styled.div`
    border: 2px solid gray;
    height: 800px;
    max-width:300px;
    min-width:300px;
    border-radius: 20px;
    padding: 10px;
`

function filters() {
  return (
    <StyledFilters>
     <h5>Cena:</h5>
    </StyledFilters>
  )
}

export default filters