// https://fakestoreapi.com/products/categories
import axios from 'axios'
export default class RestApi {

    static async getCategories() {
        return axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products/categories',
            headers: {
                Accept: 'application/json;odata=verbose',
                'content-type': 'application/json;odata=verbose'
            }
        })
    }

    static async getProducts(payload) {
        const productsListUrl = payload && payload.category ? `products/category/${payload.category}` : "products/"
        return axios({
            method: 'get',
            url: `https://fakestoreapi.com/${productsListUrl}`,
            headers: {
                Accept: 'application/json;odata=verbose',
                'content-type': 'application/json;odata=verbose'
            }
        })

    }

}
