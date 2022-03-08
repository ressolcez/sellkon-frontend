import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const product1 = [
    {id: 1, name: 'buty', description: 'Bieganko'}
]

const Products = () => {
  return (
    <main>
        <Grid container justify = "center" spacing ={4}>
        {product1.map((product) => (
          <Grid key={product.id}>
          </Grid>
        ))}
        </Grid>
    </main>
  )
}

export default Products