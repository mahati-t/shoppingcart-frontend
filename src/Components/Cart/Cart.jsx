import { Add, Remove } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate} from 'react-router-dom';
import CartEmpty from "./CartEmpty";
import CartNotEmpty from "./CartNotEmpty";


const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height:200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const ProductSize = styled.span``;


const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const Cart = () => {
  const navigate = useNavigate();
const [cartItems, setCartItems] = useState([]);
const [deleted, setdeleted] = useState([]);
const [quantity, setQuantity] = useState({});



useEffect (()=>{
  const uid= localStorage.getItem("userId");
  if(uid!= null){
    axios.get(`http://localhost:8080/cart/${uid}/getCart`)
    .then(res => 
      {
        // console.log(res.data.cartItemList)
        setCartItems(res.data.cartItemList) })
  }
  else{
    navigate('/login');
  }
 }
      ,[])

useEffect (()=>{
  const uid= localStorage.getItem("userId");
  if(uid!= null){
    axios.get(`http://localhost:8080/cart/${uid}/getCart`)
    .then(res => 
      {
        // console.log(res.data.cartItemList)
        setCartItems(res.data.cartItemList) })
  }}
      ,[deleted])


const array = cartItems.map((cartItem,index)=>{
  const uid= localStorage.getItem("userId");
  return(
    <>   
          <Product className="row mx-2 p-2">
            <ProductDetail className="col-lg-9 ">
              <NavLink to={`/products/${cartItem.product.productId}`}>
              <Image src={cartItem.product.url} />
              </NavLink>
              <Details>
                <ProductName>
                  <b>Product Name:  </b>  {cartItem.product.name}
                </ProductName>
                <ProductId>
                  <b>Product Id:  </b> {cartItem.product.productId}
                </ProductId>
                <ProductSize>
                  <b>Price:  </b>  Rs.{cartItem.product.price} /-
                </ProductSize>
               
              </Details>
            </ProductDetail>
              <div className="col-lg-3 my-auto" style={{justifyContent:"center"}}>
                      <div className="btn-group my-auto">
                          <button type="button" className="btn btn-basic" 
                          onClick={()=>{
                            axios.get(`http://localhost:8080/cart/${uid}/decreaseQuantity/${cartItem.product.productId}`)
                            .then(response =>{
                              // console.log(response.data);
                              setQuantity(response.data.quantity);
                              window.location.reload();
                            })
                            .catch(error => {
                              console.log(error);
                            })
                          
                         }}
                          ><Remove/></button>
                          <button type="button" className="btn btn-basic">Quantity: {cartItem.quantity}</button>
                          <button type="button" className="btn btn-basic"
                            onClick={()=>{
                              axios.get(`http://localhost:8080/cart/${uid}/increaseQuantity/${cartItem.product.productId}`)
                              .then(response =>{
                                console.log(response.data);
                                setQuantity(response.data.quantity);
                                window.location.reload();
                              })
                              .catch(error => {
                                console.log(error);
                              })
                            }}
                          ><Add/></button>
                      </div>
                 <br/>
                <button className="m-4" onClick={()=>{
                   const uid= localStorage.getItem("userId");
                   axios.get(`http://localhost:8080/cart/${uid}/remove/${cartItem.product.productId}`)
                   .then(response => {
                    console.log(response);
                    setdeleted(response.data);
                   })
                   .then(error => {
                    console.log(error);
                   })

                }}>Delete CartItem</button>
              </div>     
          </Product>
          <Hr />
        </>
  )
 }

)
if(cartItems.length===0){   
    return (
      <CartEmpty/>         
    )
  }
  else{
   
    return (
      <CartNotEmpty cartItemList={array}/>
    );
  };

}
  

export default Cart;
