import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";
import styled from 'styled-components';
import ProductCard from './ProductCard';



const Button = styled.button`
border-radius:4px;
width:100%;
`
const CategoryList = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState(null);
    const [productList, setProductList] = useState([]);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);

    const toggle = (i)=>{
      if (selected === i){
          setSelected(null);
      }
      setSelected(i);
  }

    useEffect (()=>{
      axios.get(`http://localhost:8080/products/getCategories`)
      .then(res => 
        {
        console.log(res.data)   
        setCategoryList(res.data);}
    )}
    ,[])


    useEffect (()=>{
    axios.get(`http://localhost:8080/products/getCategories`)
    .then(res => 
      {
      console.log(res.data)   
      setCategoryList(res.data);}
  )}
  ,[])

  useEffect (()=>{
    axios.get(`http://localhost:8080/products/allProducts`)
    .then(res => 
      {
      console.log(res.data)   
      setData(res.data);
    setProductList(res.data)}

  )}
  ,[])

  useEffect(() =>{
    if(category === null){
      const allproductsList = data.map(pro => pro);
      setProductList(allproductsList);
    }
    else {
      const filteredList = data.filter(pro => pro.category === category);
      setProductList(filteredList);
     
    }
  },[category])




  return (
    <div className='row m-2 p-2'>
       <div className='col-sm-2 p-2' style={{backgroundColor: "#f5fbfd"}}>
            <h5 style={{textAlign: "center"}}>CATEGORIES</h5>
            <nav class="navbar" style={{textAlign:"center",justifyContent:"center"}}>
                
                  <ul class="navbar-nav">
                    <Button  className={selected === null ? 'btn btn-info py-1 my-2 px-2':'btn btn-default py-1 my-2 px-2'} onClick={()=>{setCategory(null);setSelected(null)}} >All Products</Button>
                     {categoryList.map((cat, index)=> {
                        return(
                         <li class="nav-item">
                            <Button id={category} onClick={()=>{
                              toggle(index)
                              setCategory(`${cat}`)
                            }}
                             type="button" className={selected === index ?'btn btn-info py-1 my-2 px-2':'btn btn-default py-1 my-2 px-2'} >
                             {cat}
                         </Button>         
                         </li>) })}          
                  </ul>
    
            </nav>
        </div>
        <div  className='col-sm-10'>
            <Row>
                {productList.map((product,index) => (
                <ProductCard product = {product}/>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default CategoryList