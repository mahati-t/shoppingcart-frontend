import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
  const {productId}= useParams();
  const navigate = useNavigate();
    const [productDetails,setProductDetails] = useState({productId:'',name:' ',price:' ',details:' ',category:' ',subCategory:' ',url:' '});

    useEffect(()=>{
      const uid = localStorage.getItem("userId");
      if(uid !== '111'){
        navigate('/login')
      }
      else{
        axios.get(`http://localhost:8080/products/getById/${productId}`)
        .then(response => {
            console.log(response.data)
            setProductDetails(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      }     
    },[])

    const ModifyProduct = () => {
        axios.post("http://localhost:8080/products/addproduct",productDetails)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <Form  className='m-3 p-4' style={{border:"solid 1px grey", borderRadius:"4px"}}>
            <h3 style={{textAlign:"center",margin:"auto"}}>Modify Product</h3>
            <Form.Group className="mb-3 p-4"  >

            <Form.Label>ProductId</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                value={productDetails.productId}
                readOnly
                className='mb-3'
              />
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={productDetails.name}
                onChange={(e) => setProductDetails({...productDetails, name: e.target.value})}
                className='mb-3'
              />
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                value={productDetails.price}
                onChange={(e) => setProductDetails({...productDetails, price: e.target.value})}
                className='mb-3'
              />
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                value={productDetails.details}
                onChange={(e) => setProductDetails({...productDetails, details: e.target.value})}
                className='mb-3'
              />
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"              
                autoFocus
                value={productDetails.category}
                onChange={(e) => setProductDetails({...productDetails, category: e.target.value})}
                className='mb-3'
              />
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                value={productDetails.subCategory}
                onChange={(e) => setProductDetails({...productDetails, subCategory: e.target.value})}
                className='mb-3'
              />
               <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                value={productDetails.url}
                onChange={(e) => setProductDetails({...productDetails, url: e.target.value})}         
                className='mb-3'
              />
              <NavLink to={`/products/${productDetails.productId}`}>
              <Button variant="primary" onClick={ModifyProduct}>Save Changes</Button>

              </NavLink>
              <NavLink to={`/products/${productDetails.productId}`}>
              <Button variant="primary" className='mx-3'>Cancel</Button>
              </NavLink>
              
            </Form.Group>
          
          </Form>
    </div>
  )
}

export default UpdateProduct