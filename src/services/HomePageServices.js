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
    AddProduct(categoryId,product){
        return axios.post(baseURL + '/' + categoryId, product)
    }
    deleteProduct(productId){
        return axios.delete(baseURL + '/' + productId);
    }

    updateProduct(productId, product,categoryId){
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
        return axios.get("http://localhost:8080/products/ProductsFromCategory/" + categoryId)
    }

    addCategory(category){
        return axios.post('http://localhost:8080/category/', category)
    }

    deleteCategory(categoryId){
        return axios.delete('http://localhost:8080/category/'+ categoryId)
    }
}

export default new HomePageServices()