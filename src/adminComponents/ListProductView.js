import React from 'react'
import ProductView from './ProductComponents/ProductsList'
import TopBar from './TopBar'
import styled from 'styled-components'

const Container = styled.div``

function ListProductView() {
  return (
      <Container>
          <TopBar/>
          <ProductView/>
      </Container>
    
  )
}

export default ListProductView