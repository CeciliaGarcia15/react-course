import { createContext,useState } from "react"


export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {
   
   //Shopping Cart - Increment Quantity
    const [count,setCount] = useState(0);

    //Product Detail - Show-Close
   const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
   const openProductDetail = ()=> setIsProductDetailOpen(true)
   const closeProductDetail = ()=> setIsProductDetailOpen(false)
   

      //Product Detail - Show Product
   const [productToShow, setProductToShow] = useState({});


   //Shopping cart - add products to cart
   const [cartProducts, setCartProducts] = useState([]);

   
   return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}