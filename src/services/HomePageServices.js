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

    getProductsFromCategoryFilteredByPrice(categoryId,minPrice,maxPrice){
     
        if(Object.keys(minPrice).length === 0){
            minPrice = 0;
          }
          if(Object.keys(maxPrice).length === 0){
            maxPrice = 50000;
          }

        return axios.get("http://localhost:8080/products/price/" + categoryId +"/" + minPrice + "/" + maxPrice)
    }

    addCategory(category){
        return axios.post('http://localhost:8080/category/', category)
    }

    deleteCategory(categoryId){
        return axios.delete('http://localhost:8080/category/'+ categoryId)
    }

    getOpinionsToProduct(productId){
        return axios.get("http://localhost:8080/opinions/opinionsProduct/"+productId)
    }

    addOpinion(productId,opinion){
      return axios.post("http://localhost:8080/opinions/"+ productId, opinion)
    }

    registerUser(userData)
    {
        return axios.post('http://localhost:8080/user/', userData)
    }
}

export default new HomePageServices()