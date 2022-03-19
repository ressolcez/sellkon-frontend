import React from 'react'
import styled from 'styled-components'
import AddProduct from './ProductComponents/AddProduct'
import TopBar from './TopBar'

const Container = styled.div``
const TableContainer = styled.div`
  margin: 15px;
`

function AddProductView() {
  return (
    <Container>
    <TopBar/>
    <TableContainer> <AddProduct/></TableContainer>
    </Container>
  )
}

export default AddProductView