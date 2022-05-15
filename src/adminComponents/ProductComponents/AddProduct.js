import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HomePageServices from './../../services/HomePageServices'
import {useParams } from 'react-router-dom';

const Container = styled.div ``

const TableContainer = styled.div`
    padding: 20px;
`
function AddProduct() {

    const [productName, setProductName] = useState('');
    const [shortName, setShortName] = useState('');
    const [price, setPrice] = useState(0);
    const [slider, setSlider] = useState(false);
    const [specialOffer, setSpecialOffer] = useState(false);
    const [newPrice, setNewPrice] = useState(0);
    const [shortDesc, setShortDesc] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [categoryId,setCategoryId] = useState(1)
    const [image, setImage] = useState('');
    const {id} = useParams();

   

    const addProduct = (e) => {
        e.preventDefault();
        const product = {shortName,price,slider,specialOffer,newPrice,shortDesc,fullDescription,image,productName}
        if(id){
            HomePageServices.updateProduct(id,product,categoryId).then((response) =>{
                console.log(response.data)
                }).catch(error => {
                   console.log(error)
            })

        }else{
        HomePageServices.AddProduct(categoryId,product).then((response) =>{
            console.log(response.data)
            }).catch(error => {
               console.log(error)
        })
    }
}


useEffect(() => {
    if(id){
    HomePageServices.getProductById(id).then((response) =>{
        setProductName(response.data.productName)
        setShortName(response.data.shortName)
        setPrice(response.data.price)
        setSlider(response.data.slider)
        setSpecialOffer(response.data.specialOffer)
        setNewPrice(response.data.newPrice)
        setShortDesc(response.data.shortDesc)
        setFullDescription(response.data.fullDescription)
        setImage(response.data.image)
        setCategoryId(response.categoryModel.category_id)
    }).catch(error => {
        console.log(error)
    })
}
}, [])


    const title = () => {
        if(id){
            return <h2>Edycja Produku</h2>
        }else{
            return <h2 >Dodawanie Produku</h2>
        }
    }

    const infTable = () => {
        if(id){
            return (
     <table className="table table-bordered table-sm table-striped">
        <thead>
        <th> Produkt Id</th>
                    <th> Nazwa produktu </th>
                    <th> Krotka nazwa </th>
                    <th> Cena </th>
                    <th> Slider </th>
                    <th> Special offer </th>
                    <th> Nowa cena </th>
                    <th> Krótki opis </th>
                    <th> Caly opis </th>
                    <th> Zdjecie </th>
                    <th> CategoryId </th>

        </thead>
        <tbody>
                            <tr > 
                            <td> {id} </td>
                                <td>{productName}</td>
                                <td>{shortName}</td>
                                <td>{price}</td>
                                <td>{slider + ''}</td>
                                <td>{specialOffer + ''}</td>
                                <td>{newPrice}</td>
                                <td>{shortDesc}</td>
                                <td>{fullDescription}</td>
                                <td>{image}</td>
                                <td>{categoryId}</td>
                            </tr>
                </tbody>
     </table>
    )
        }
    }


  return (
    <Container>
            <TableContainer>
            {title()}
            {infTable()}
                <form>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Nazwa produktu </th>
                    <th> Krotka nazwa </th>
                    <th> Cena </th>
                    <th> Slider </th>
                    <th> Special offer </th>
                    <th> Nowa cena </th>
                    <th> Krótki opis </th>
                    <th> Caly opis </th>
                    <th> Zdjecie </th>
                    <th> CategoryId </th>
                </thead>
                <tbody>

                            <tr> 
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
                            <td>
                            <input placeholder="category" name="category" className="form-control" onChange={(e) => setCategoryId(e.target.value)}/>
                            </td>
                            </tr>
                </tbody>
            </table>
            <button className = "btn btn-success" onClick = {(e) => addProduct(e)} >Zatwierdź</button>
            </form>
            </TableContainer>
            
        </Container>
  )
}

export default AddProduct