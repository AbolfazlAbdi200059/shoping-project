import Navigation from "./Navigation";
import Data from "../Data/Data";
import Product from "./Product";

console.log("hello master abolfazl");

const HomePage = () => {
    return (  
        <div className="HomePage">
            <h1 className="h1">HomePage</h1>
            <div className="ProductList">
                <h1 className="h2">Products</h1>
                {Data.map((p) => {
                    return(
                        <Product
                        Product={p}
                        key={p.id}
                        />
                    )
                })}
            </div>
        </div>
    );
}
 
export default HomePage;