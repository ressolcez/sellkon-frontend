import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HomePageServices from './../../services/HomePageServices'
import {useParams } from 'react-router-dom';

const Container = styled.div ``

const TableContainer = styled.div`
    padding: 20px;
`

function AddCategory() {
  return (
    <div><h1>AddCategory</h1></div>
  )
}

export default AddCategory