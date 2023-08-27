import { useEffect, useState } from "react"
import RestApi from "../apis"
const useFetchProducts = (category) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        return RestApi.getProducts({category})
    }

    useEffect(() => {
        fetchProducts().then(res => {
            const data  = res&& res.data && res.data.length ? res.data : [];
            setProducts(data);
        }).catch(e => console.log(e, 'Products'))
    }, [category])
return {products}
}

export default useFetchProducts