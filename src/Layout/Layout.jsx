import Navigation from "../Components/Navigation";

const Layout = ({children}) => {
    return (
        <div>
            <Navigation/>
            {children}
        </div>
    );
}
 
export default Layout;