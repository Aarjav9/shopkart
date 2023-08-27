import { useEffect, useState } from "react"
import RestApi from "../apis"
const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        return RestApi.getCategories()
    }

    useEffect(() => {
        fetchCategories().then(res => {
            const data  = res&& res.data && res.data.length ? res.data : [];
            setCategories(data);
        }).catch(e => console.log(e, 'categories'))
    }, [])
return {categories}
}

export default useFetchCategories