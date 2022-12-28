import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Routes, Route, useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import ProductList from '../Components/ProductList';
import SignupForm from '../Components/SignupForm';



const Wrapper = styled.div`
justify-content: center;
margin:auto;
align-items: center;
padding: 20px;

`
const Title = styled.h4`
text-align:center;`


const LoginPage = () => {

  const navigate = useNavigate();
  const navigateToRegisterPage =() =>{
    navigate('/signup');
  };



  const[result, setResult] = useState([]);
  const[User, setUser] = useState({
    email:'',
    password:''
  });

 const loginApi = (e)=>{
  e.preventDefault(e);
     axios.post("http://localhost:8080/login", {
      email: User.email,
      password: User.password,
    })
    .then((response)=>{
      if(response != null){
        console.log(response.data)
        setResult(response.data);
        localStorage.setItem('userId',(response.data.userID))
        navigate('/products');
        window.location.reload();
      }
      else{
        window.location.reload();
      }
     
    })
    .catch((error) => {
      alert('Invalid email or password')
      console.log(error)
    })
  
 }



  return (
   
    <>
    <Container>
     
      <Wrapper className='row'>     
      <div className='col-md-3'></div>  
      <Form className='col-md-6 p-4 mx-auto my-4' style={{border:"solid 1px",borderRadius:"8px",justifyContent:"center",margin:"auto"}}>
      <Title className='pt-3 pb-2'>LOGIN TO YOUR ACCOUNT</Title>
      <Form.Group className="my-4" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" onChange={(e)=>setUser({ ...User,email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="my-4" controlId="formBasicPassword">    
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUser({ ...User,password:e.target.value})} />
        
      </Form.Group>
      <Button type="submit" onClick={loginApi} style={{width:"100%"}} className='mb-2'>
        Submit
      </Button>
      <br/>
      <p style={{margin:"auto",justifyContent:"center",textAlign:"center"}}>Forgot Password?</p>
      <hr/>
      <p style={{margin:"auto",justifyContent:"center",textAlign:"center"}}>New User ? Register Here</p><br/>
      <Button onClick={navigateToRegisterPage} style={{width:"100%"}} className="mb-4">Register</Button>
      
    </Form>
    <div className='col-md-3'></div>
    
      </Wrapper>
    </Container>
    <Routes>
      <Route path='/signup' element={<SignupForm/>}/>
      <Route path='/products' element={<ProductList/>}/>
    </Routes>
    </>
  );
}

export default LoginPage;