import axios from 'axios'

const baseURL = "http://localhost:8080/products";

class HomePageServices{

    getSliderContent(){
        return axios.get(baseURL+"/slider")
    }
    getRecommendedContent(){
        return axios.get(baseURL+"/Recommended")
    }

    getAllProducts(){
        return axios.get(baseURL+"/AllProducts")
    }
    AddProduct(productId,product){
        console.log(productId)
        return axios.post(baseURL + '/' + productId, product)
    }
    deleteProduct(productId){
        console.log(productId)
        return axios.delete(baseURL + '/' + productId);
    }

    updateProduct(productId, product,categoryId){
        console.log(productId,categoryId)
        return axios.put(baseURL + '/' +productId+ '/'+categoryId, product);
    }

    getProductById(productId){
        return axios.get(baseURL + '/' + productId);
    }

    getSpecialOfferContent(){
        return axios.get(baseURL + '/SpecialOffer');
    }

    getAllCategory(){
        return axios.get("http://localhost:8080/category/AllCategory");
    }

    getProductsFromCategory(categoryId){
        return axios.get("http://localhost:8080/products/ProductsFromCategory" + '/' + categoryId)
    }
}

export default new HomePageServices()