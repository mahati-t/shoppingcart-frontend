import axios from 'axios';
import { useState,useEffect } from 'react';
import {NavLink, Route, Routes, useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cart from './Cart/Cart';


const ProductPage = () => {

  const {productId} = useParams();
  const [pro, setProduct] =useState([]);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

    
  useEffect(()=>{
    setUserId(localStorage.getItem("userId"));
  },[userId])

    useEffect (()=>{
        axios.get(`http://localhost:8080/products/getById/${productId}`)
        .then(res => 
          {console.log(res.data)   
            setProduct(res.data)} 
      ).catch(error => {
        console.log(error)
      })
        }
      ,[])
 

    const addToCart =(event)=>{
      const uid = localStorage.getItem("userId");
      console.log(uid);
      event.preventDefault();
        axios.get(`http://localhost:8080/cart/${uid}/add/${productId}`);
        alert("Product Added Succesfully");
        navigate('/cart');      
    }
   

  return (
    <div>
        <div style={{display:"flex",padding:"2rem"}} className="row">
            <div className='col-md-3 p-3' >
                <img src={pro.url} alt="Example" style={{ width: "100%",height: "50vh"}}/>
            </div>
            <div  className='col-md-7 p-3'>
                <h4>{pro.name}</h4>
                <p>{pro.details}</p>
                <p><span style={{fontWeight:"bold"}}>Category:</span> {pro.category}</p>
                <p><span style={{fontWeight:"bold"}}>Subcategory:</span> {pro.subCategory}</p>
                <p><span style={{fontWeight:"bold"}}>Price: </span> Rs. {pro.price} /-</p>

              
                {userId===null ?<NavLink to="/login" className="btn btn-outline-dark ms-2">
                Add to cart</NavLink>: <button className="btn btn-outline-dark ms-2"  onClick={addToCart} >Add to cart</button>}
                
                {userId===null ?<NavLink to="/login" className="btn btn-outline-dark ms-2 ">
                View Cart</NavLink>:<NavLink to='/cart' ><button className='btn btn-outline-dark ms-2' >View Cart</button></NavLink>}

                {userId==='111'? <NavLink to={`/products/update/${productId}`}>
                <Button variant="primary" className='mx-3'>Modify Product</Button>
                </NavLink>:null}
             </div>
                   
               
       </div> 
       <Routes>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
       

    </div>
  
  )
}

export default ProductPage