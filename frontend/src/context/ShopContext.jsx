import { createContext, useContext, useEffect, useState } from "react"
import { authDataContext } from "./AuthContext"
import axios from "axios"
export const shopDataContext = createContext()

function ShopContext({ children }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const { serverUrl } = useContext(authDataContext)
    const [cartItem, setCartItem] = useState({});
    const currency = "₹";
    const delivery_fee = 40

    const getProducts = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/listproduct", { withCredentials: true });
            setProducts(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = async () => {
        if (!size) {
            console.log("Select Product Size")
            return;
        }
        let cartData = structuredClone(cartItem); //Clone the product

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    useEffect(() => {
        getProducts()
    }, [])

    const value = { products, search, setSearch, showSearch, setShowSearch, currency, delivery_fee, getProducts }
    return (
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>

    )
}

export default ShopContext