import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HomePageServices from './../../services/HomePageServices'

const Container = styled.div ``

const TableContainer = styled.div`
    padding: 20px;
`

function AddProduct() {

    const [category, setCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [shortName, setShortName] = useState('');
    const [price, setPrice] = useState(0);
    const [slider, setSlider] = useState(false);
    const [specialOffer, setSpecialOffer] = useState(false);
    const [newPrice, setNewPrice] = useState(0);
    const [shortDesc, setShortDesc] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [image, setImage] = useState('');


    const addProduct = (e) => {
        e.preventDefault();

        const product = {category,shortName,price,slider,specialOffer,newPrice,shortDesc,fullDescription,image,productName}
        HomePageServices.AddProduct(product).then((response) =>{
            console.log(response.data)
            }).catch(error => {
               console.log(error)
        })
    }

  return (
    <Container>
            <TableContainer>
                <form>
        <h2> Dodawanie Produku</h2>
            <table className="table table-bordered table-striped">
              
                <thead>
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
                </thead>
                <tbody>

                            <tr> 
                            <td>
                            <input placeholder="Kategoria" name="Category" className="form-control" onChange={(e) => setCategory(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Nazwa Produktu" name="ProductName" className="form-control" onChange={(e) => setProductName(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Krótka nazwa" name="ShortName" className="form-control" onChange={(e) => setShortName(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Cena" name="Price" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="true/false" name="Slider" className="form-control"onChange={(e) => setSlider(e.target.value)} />
                            </td>
                            <td>
                            <input placeholder="true/false" name="SpecialOffer" className="form-control" onChange={(e) => setSpecialOffer(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Nowa Cena" name="NewPrice" className="form-control" onChange={(e) => setNewPrice(e.target.value)} />
                            </td>
                            <td>
                            <input placeholder="Krótki opis" name="ShortDesc" className="form-control" onChange={(e) => setShortDesc(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Dlugi Opis" name="FullDesc" className="form-control" onChange={(e) => setFullDescription(e.target.value)}/>
                            </td>
                            <td>
                            <input placeholder="Zdjecie" name="Image" className="form-control" onChange={(e) => setImage(e.target.value)}/>
                            </td>
                            </tr>
                </tbody>
            </table>
            <button className = "btn btn-success" onClick = {(e) => addProduct(e)} >Dodaj produkt </button>
            </form>
            </TableContainer>
            
        </Container>
  )
}

export default AddProduct