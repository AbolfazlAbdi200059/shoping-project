import './App.css';
import {Switch , Route} from "react-router-dom";
import HomePage from './Components/HomePage';
import Layout from './Layout/Layout';
import Cart from './Components/Cart';
import CartProvider from './Provider/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <CartProvider>
        <Layout>
          <ToastContainer/>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Login" component={Login}/>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
