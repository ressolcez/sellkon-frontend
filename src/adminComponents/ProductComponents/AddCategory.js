import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HomePageServices from './../../services/HomePageServices'
import {useParams } from 'react-router-dom';

const Container = styled.div ``

const TableContainer = styled.div`
    padding: 20px;
`

function AddCategory() {

  const [cateGoryName, setCateGoryName] = useState('');
  const [image, setImage] = useState('')
  const {id} = useParams();

  
  const addCategoryComponent = (e) => {
    e.preventDefault();
    const category = {cateGoryName,image}
    HomePageServices.addCategory(category).then((response) =>{
        console.log(response.data)
        }).catch(error => {
        console.log(error)
    })
}

  return (
    <Container>
            <TableContainer>
                <form>
            <table className="table table-bordered table-sm table-striped">
            <thead>
                    <th> Nazwa kategorii</th>
                    <th> Zdjęcie </th>
                </thead>
                <tbody>

                            <tr> 
                            <td>
                            <input placeholder="Nazwa kategorii" name="CategoryName" className="form-control" onChange={(e) => setCateGoryName(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Zdjęcie" name="Image" className="form-control" onChange={(e) => setImage(e.target.value)}/>
                            </td>
                            </tr>
                </tbody>
            </table>
            <button className = "btn btn-success" onClick = {(e) => addCategoryComponent(e)} >Zatwierdź</button>
            </form>
            </TableContainer>
        </Container>
  )
}

export default AddCategory