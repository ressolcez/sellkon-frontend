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
    AddProduct(product){
        return axios.post(baseURL,product)
    }

    deleteProduct(productId){
        console.log(productId)
        return axios.delete(baseURL + '/' + productId);
    }
}

export default new HomePageServices()