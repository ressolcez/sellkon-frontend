import React from 'react'
import TopBar from './TopBar'
import styled from 'styled-components'
import AddCategory from './ProductComponents/AddCategory'


const Container = styled.div``


function AddCategoryView() {
  return (
    <Container>
       <TopBar/>
       <AddCategory/>
    </Container>
  )
}

export default AddCategoryView