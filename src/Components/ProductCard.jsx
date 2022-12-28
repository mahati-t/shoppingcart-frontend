import React from 'react'
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Container1 = styled.div`
  flex: 1;
  margin: auto;
  min-width: 280px;
  height: 380px;
  align-items: center;
  justify-content: center;
  text-align:center;
  background-color: #f5fbfd;
  position: relative; 
  padding: 1rem;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  margin:auto;
  justify-content: center;
`;
const Name = styled.div`
padding: 2px;
margin:0.5rem ;
font-weight:bold;
height:50px;`;

const ProductCard = (props) => {
  const {product} = props;
  return (
    <Container1>
    <div>
    <NavLink to={`/products/${product.productId}`}>
    <Image src ={product.url} alt="imageofProduct"/>
    </NavLink>
    </div> 
   <Name>{product.name}</Name>
   <p style={{padding: "2px",margin:"0.5rem",fontWeight:"bold"}}> Rs. {product.price} /-</p>
   <div>
   <NavLink  to={`/products/${product.productId}`} style={{textAlign:"center"}}><button style={{borderRadius:"5px"}}>Buy Now</button></NavLink>
   </div>
  </Container1>
  )
}

export default ProductCard