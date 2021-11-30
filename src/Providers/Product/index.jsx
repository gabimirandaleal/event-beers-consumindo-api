import { createContext, useState, useEffect } from "react";
import api from "../../Services/api"

export const ProductContext = createContext([]);

export const ProductProvider = ({children}) => {
    const [product, setProducts] = useState([]);
    const [productNext, setProductsNext] = useState([]);
    const [page, setPage] = useState(1)
    

    useEffect(() => {
        api.get(`?page=${page}`)
        .then((response) =>{
            setProducts(response.data)
        })
    }, [page])

    useEffect(() => {
        api.get(`?page=${page+1}`)
        .then((response) =>{
            setProductsNext(response.data)
        })
    }, [page])

    const nextPage = () =>{
        if(productNext.length !== 0){
            setPage(page+1)
        }
    }

    const previousPage = () =>{
        if(page > 1){
            setPage(page-1)
        }
    }
   
    return(
        <ProductContext.Provider value={{product, nextPage, previousPage}}>
            {children}
        </ProductContext.Provider>
    )
}