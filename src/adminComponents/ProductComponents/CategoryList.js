import React, {useState, useEffect} from 'react'
import CategoryService from "../../services/HomePageServices"
import styled from 'styled-components'

const Container = styled.div ``
const TableContainer = styled.div`padding: 20px;`

function CategoryList() {

    const [Categorys, setCategorys] = useState([])

    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = () => {
        CategoryService.getAllCategory().then((response) => {
            console.log(Categorys)
            setCategorys(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteCategory = (categoryId) => {
        CategoryService.deleteCategory(categoryId).then((response) =>{
            getAllCategories();
        }).catch(error =>{
            console.log(error);
        })
         
     }

  return (
    <Container>
            <TableContainer>
        <h2> Lista Kategorii:</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Category Id</th>
                    <th> Nazwa Kategorii </th>
                    <th> Zdjęcie</th>
                    <th> Akcja </th>
                </thead>
                <tbody>
                    {
                        Categorys.map(
                            Category =>
                            <tr key = {Category.category_id}> 
                                <td> {Category.category_id} </td>
                                <td> {Category.cateGoryName} </td>
                                <td>{Category.image}</td>
                                <td>
                                <button className = "btn btn-danger btn-block" onClick = {() => deleteCategory(Category.category_id)}
                                    style = {{marginBottom: "10px"}}> Usuń</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </TableContainer>
            </Container>
  )
}

export default CategoryList