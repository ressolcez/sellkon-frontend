import React from 'react'
import TopBar from './TopBar'
import styled from 'styled-components'
import CategoryList from './ProductComponents/CategoryList'

const Container = styled.div``


function ListCategoryView() {
  return (
    <Container>
        <TopBar/>
        <CategoryList/>
    </Container>
  )
}

export default ListCategoryView