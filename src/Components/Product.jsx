import { useProduct, useProductAction } from "../Provider/CartProvider";
import CheckCart from "../Utils/CheckCart";
import { toast } from "react-toastify";


const Product = ({Product}) => {

    const {cart} = useProduct();

    const {price , discount , OffPrice , model , image , id , name} = Product;

    const dispatch = useProductAction();

    const AddProduct = (Product) => {
        dispatch({type: "Add-To-Cart" , payload: Product});
        toast.success(`${name} Added to cartList`);
    }

    return (  
        <div className="Product">
            <div className= {`image image${id}`}>
            </div>
            <div className="detail">
                <span className="left">Price: {price}$</span>
            </div>
            <button onClick={() => AddProduct(Product)} className="Add">
                {CheckCart(cart , Product) ? "InCart" : "AddToCart"}
            </button>
        </div>
    );
}
 
export default Product;