import React, {useState, useEffect} from 'react'
import ProductService from "../../services/HomePageServices"
import styled from 'styled-components'

function ProductsList() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        ProductService.getAllProducts().then((response) => {
            setProducts(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteProduct = (productId) => {
        console.log(productId)
        ProductService.deleteProduct(productId).then((response) =>{
            getAllProducts();
        }).catch(error =>{
            console.log(error);
        })
         
     }


const Container = styled.div ``

const TableContainer = styled.div`
    padding: 20px;`

    return (
        <Container>
            <TableContainer>
        <h2> Lista Produktów:</h2>
            <table className="table table-bordered table-striped">
              
                <thead>
                    <th> Produkt Id</th>
                    <th> Kategoria </th>
                    <th> Nazwa produktu </th>
                    <th> Krotka nazwa </th>
                    <th> Cena </th>
                    <th> Slider </th>
                    <th> Special offer </th>
                    <th> Nowa cena </th>
                    <th> Krótki opis </th>
                    <th> Caly opis </th>
                    <th> Zdjecie </th>
                    <th> Akcja </th>
                </thead>
                <tbody>
                    {
                        Products.map(
                            Product =>
                            <tr key = {Product.id}> 
                                <td> {Product.id} </td>
                                <td> {Product.category} </td>
                                <td>{Product.productName}</td>
                                <td>{Product.shortName}</td>
                                <td>{Product.price}</td>
                                <td>{Product.slider + ''}</td>
                                <td>{Product.specialOffer + ''}</td>
                                <td>{Product.newPrice}</td>
                                <td>{Product.shortDesc}</td>
                                <td>{Product.fullDescription}</td>
                                <td>{Product.image}</td>
                                <td>
                                <button className = "btn btn-danger" onClick = {() => deleteProduct(Product.id)}
                                    style = {{marginLeft:"10px"}}> Usuń</button>
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

export default ProductsList