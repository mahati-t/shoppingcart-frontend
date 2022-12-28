import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const TopButton = styled.button`
  
  font-weight: 400;
  cursor: pointer;
  border:none;
  background-color:black;
  color:white;
`;


const CartNotEmpty = (props) => {
  const navigate = useNavigate();
    const {cartItemList} = props;
  return (
    <Wrapper>
    <Title>YOUR BAG</Title>
    <Top >
    <NavLink to={`/products`}> <TopButton className="my-1 py-2">CONTINUE SHOPPING</TopButton></NavLink>  
    <NavLink to={`/cart`}> <TopButton className="my-1 py-2"
      onClick={()=>{
         const userid= localStorage.getItem("userId");
         axios.get(`http://localhost:8080/order/${userid}/createOrder`)
         .then(res => {
          console.log(res);
          // window.location.reload();
          navigate('/orderHistory');
          })
      .catch(error => console.log(error))
    }}>CHECKOUT NOW</TopButton></NavLink>
    </Top>
    {cartItemList}
  
  </Wrapper>
  )
}

export default CartNotEmpty