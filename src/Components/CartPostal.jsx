import { toast } from "react-toastify";
import { useProductAction } from "../Provider/CartProvider";

const CartPostal = ({Product}) => {

    const {price , discount , OffPrice , model , image , id , quantity , name} = Product;

    const dispatch = useProductAction();

    const Increament = (Product) => {
        dispatch({type: "increament" , payload: Product})
    }

    const Decreament = (Product) => {
        dispatch({type: "decreament" , payload: Product})
    }

    const Delete = (Product) => {
        dispatch({type: "delete" , payload: Product})
        toast.info(`${name} Deleted From Your Carts`)
    }

    return (  
        <div className="ProductCart">
            <div className= {`imageCart image${id} left`}></div>
            <div className="detail">
                <span className="price left">Price: {price}$</span>
                <div className="Controle left">
                    <div className="left ControleButton" onClick={() => Decreament(Product)}>-</div>
                    <div className="left ControleButton">{quantity}</div>
                    <div className="left plus ControleButton" onClick={() => Increament(Product)}>+</div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}
 
export default CartPostal;