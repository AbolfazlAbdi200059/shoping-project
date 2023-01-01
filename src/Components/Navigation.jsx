import { Link , NavLink} from "react-router-dom";
import { useProduct, useProductAction } from "../Provider/CartProvider";

const Navigation = () => {

    const {cart} = useProduct();

    return (
        <div>
            <ul className="ul">
                <li className="li fc">
                    <NavLink to="/" className="Link" activeClassName="activeLink" exact>HomePage</NavLink>
                </li>
                <li className="li">
                    <NavLink to="/Cart" className="Link" activeClassName="activeLink">Cart</NavLink>
                    <div className="total">{cart.length}</div>
                </li>
            </ul>
        </div>
    );
}
 
export default Navigation;