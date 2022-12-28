
import './App.css';
import NavigationBar from './Components/NavigationBar';
import EditProfile from './Components/EditProfile';
import Cart from './Components/Cart/Cart';
import ProductPage from './Components/ProductPage';
import { Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Profile from './Components/Profile/Profile';
import ProductList from './Components/ProductList';
import SignupForm from './Components/SignupForm';
import LoginPage from './Components/LoginPage';
import AddProduct from './Components/AddProduct';
import CategoryList from './Components/ByCategory';
import OrderHistoryDetails from './Components/OrderDetails/OrderHistoryDetails';
import UpdateProduct from './Components/UpdateProduct';



function App() {
  return (
   <div> 
    <NavigationBar/>
  
 <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/products" element={<ProductList/>} />
        <Route exact path="/products/:productId" element={<ProductPage/>}/>
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path ="/products/categories" element={<CategoryList/>}/>
        <Route exact path="/orderHistory" element={<OrderHistoryDetails/>}/>
        <Route exact path="/products/addProduct" element={<AddProduct/>}/>
        <Route exact path="/products/update/:productId" element={<UpdateProduct/>}/>
        <Route exact path="/editProfile" element={<EditProfile/>}/>
 </Routes>
   </div>
  );
}

export default App;
