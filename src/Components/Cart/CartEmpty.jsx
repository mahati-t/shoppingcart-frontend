import React from 'react'
import { NavLink } from 'react-router-dom';
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

const CartEmpty = () => {
  return (
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <NavLink to={`/products`}><TopButton className="my-1 py-2">CONTINUE SHOPPING</TopButton></NavLink>   
        <TopButton className="my-1 py-2">CHECKOUT NOW</TopButton>
      </Top>
      <h2 style={{justifyContent:"center",textAlign:"center",marginTop:"50px"}}>Your Cart is Empty</h2>
      </Wrapper> 
  )
}

export default CartEmpty