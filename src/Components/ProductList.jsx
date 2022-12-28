import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductList = () => {

  const [data, setData] =useState([]);
  const [filteredProducts, setFilteredproducts] = useState([]);
  const [searchString, setSearchString] = useState('');
  

  useEffect (()=>{
    axios.get(`http://localhost:8080/products/allProducts`)
    .then(res => 
      {console.log(res.data);
      setData(res.data);
      setFilteredproducts(res.data)}

  )}
  ,[])

useEffect(()=>{
  if(searchString===''){
    setFilteredproducts(data);
  }
  else{
  const filteredList = data.filter((product,index) => product.name.toLowerCase().includes(searchString.toLowerCase()));
  setFilteredproducts(filteredList);
  }  
},[searchString])
  
  return (
    <div>   
     
      <div className="input-group mx-auto py-3 my-3" style={{width:"fit-content"}}>
          <div id="navbar-search-autocomplete" className="form-outline">
            <input type="search" id="form1" className="form-control" onChange={(e)=> setSearchString(e.target.value)}
            value={searchString} placeholder="Search Product "/>
          </div>   
         
      </div>
      <Container>
          {filteredProducts.map((product) => (
    <ProductCard product = {product}/> ))}
      </Container>
    </div>
   
  );
};

export default ProductList;