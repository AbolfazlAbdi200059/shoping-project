import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";

const cartContext = createContext();
const cartContextDispatcher = createContext();

const initialState = {
    cart: [],
    total: 0,
    discount: 0
}

const CartProvider = ({children}) => {

    const [Product , dispatch] = useReducer(CartReducer , initialState);

    return (  
        <cartContext.Provider value={Product}>
            <cartContextDispatcher.Provider value={dispatch}>
                {children}
            </cartContextDispatcher.Provider>
        </cartContext.Provider>
    );
}
 
export default CartProvider;

export const useProduct = () => useContext(cartContext);

export const useProductAction = () => useContext(cartContextDispatcher);