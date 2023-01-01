import { useProduct } from "../Provider/CartProvider";
import CartPostal from "./CartPostal";

const Cart = () => {

    const Product = useProduct();

    const {total , discount} = useProduct();

    return (
        <div className="Cart">
            <h2>your Cart:</h2>
            <div className="CartList left">
                {Product.cart.length ? <h2 className="CartListh2">CartList</h2> : <div></div>}
                {Product.cart.map((p) => {
                    return(
                        <CartPostal
                        Product={p}
                        />
                    )
                })}
                <div className="clear"></div>
            </div>
            {Product.cart.length ? 
            <div className="Sumarry left">
                <h2 className="CartSumarry">Cart Sumary</h2>
                <hr />
                <div className="TotalPrice">
                    <span className="left">Total:</span>
                    <span className="left Price">{total}$</span>
                    <div className="clear"></div>
                </div>
                <div className="discount">
                    <div className="left">discount:</div>
                    <div className="left discountCount">{discount}$</div>
                    <div className="clear"></div>
                </div>
                <div className="LastTotal">
                    <div className="left">OffPrice:</div>
                    <div className="left OffPrice">{total - discount}$</div>
                </div>
                <button className="Confirm">Submit</button>
            </div> : <div></div>
            }
        </div>
    );
}
 
export default Cart;