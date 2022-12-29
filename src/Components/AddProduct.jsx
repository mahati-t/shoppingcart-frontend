import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';


const AddProduct = () => {
  const navigate = useNavigate();
    const [productDetails,setProductDetails] = useState({name:' ',price:' ',details:' ',category:' ',subCategory:' ',url:' '});

  useEffect(()=>{
    const uid = localStorage.getItem("userId");
    if(uid !== '111'){
      navigate('/login')
    }
  },[])

    const addingProduct = () => {     
        axios.post("http://localhost:8080/products/addproduct",productDetails)
        .then(response => {
            // console.log(response.data)
            console.log(productDetails)
        })
        .catch(error => {
            console.log(error)
        })   
   
      }
        return (
          <>
          <div>
              <Form  className='m-3 p-4' style={{border:"solid 1px grey", borderRadius:"4px"}}>
                  <h3 style={{textAlign:"center",margin:"auto"}}>Add Product</h3>
                  <Form.Group className="mb-3 p-4" >
      
                  <Form.Label style={{fontWeight:"bold"}}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      value={productDetails.name}
                      onChange={(e) => setProductDetails({...productDetails, name: e.target.value})}
                      className='mb-3'
                      required
                    />
                    <Form.Label style={{fontWeight:"bold"}}>price</Form.Label>
                    <Form.Control
                      type="number"               
                      autoFocus
                      value={productDetails.price}
                      onChange={(e) => setProductDetails({...productDetails, price: e.target.value})}
                      className='mb-3'
                      required
                    />
                    <Form.Label style={{fontWeight:"bold"}}>Details</Form.Label>
                    <Form.Control
                      type="text"               
                      autoFocus
                      value={productDetails.details}
                      onChange={(e) => setProductDetails({...productDetails, details: e.target.value})}
                      className='mb-3'
                      required
                    />
                    <Form.Label style={{fontWeight:"bold"}}>Category</Form.Label>
                    <Form.Control
                      type="text"              
                      autoFocus
                      value={productDetails.category}
                      onChange={(e) => setProductDetails({...productDetails, category: e.target.value})}
                      className='mb-3'
                      required
                    />
                    <Form.Label style={{fontWeight:"bold"}}>Sub Category</Form.Label>
                    <Form.Control
                      type="text"               
                      autoFocus
                      value={productDetails.subCategory}
                      onChange={(e) => setProductDetails({...productDetails, subCategory: e.target.value})}
                      className='mb-3'
                      required
                    />
                     <Form.Label style={{fontWeight:"bold"}}>Url</Form.Label>
                    <Form.Control
                      type="text"               
                      autoFocus
                      value={productDetails.url}
                      onChange={(e) => setProductDetails({...productDetails, url: e.target.value})}         
                      className='mb-3'
                      required
                    />
                   
                    <Button variant="primary" onClick={addingProduct}>Add Product</Button>
                  
                  
                  </Form.Group>
                
                </Form>   
                    
          </div>
               
          </>
        )

 }
    


export default AddProduct