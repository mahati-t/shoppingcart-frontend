import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Route, Routes, useNavigate} from 'react-router-dom';
import ProductList from './ProductList';



const Title = styled.h4`
text-align:center;`

const SignupForm = () => {
  const navigate = useNavigate();
  

  const [user, setUser] = useState({name:'',email:'',password:''});
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

const userSignup =(e)=>{
  e.preventDefault(e);
  axios.post("http://localhost:8080/signup",user)
  .then(response => {
    if(response != null){
      console.log(response.data);
      navigate('/products');
      window.location.reload();
    }   
    else{
      window.location.reload();
    }
  })
  .catch(error => {
    console.log(error);
  })
}

const emailValidate =(e) => {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(e.target.value.match(emailExpression)){
    setEmailMsg("Valid EmailId");
  }
  else{
    setEmailMsg("Invalid EmailId");
  }
}


const passwordValidate =(e) =>{
  const passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if(e.target.value.match(passwordExpression)){
    setPasswordMsg("Valid password");
  }
else{
  setPasswordMsg("Invalid password");
}
}

  return (
    <>
    <Container className='row mx-auto my-4'  >
        <div className='col-md-3'></div>
      <Form  className='col-md-6 my-4 p-4' style={{border:"solid 1px",borderRadius:"8px",justifyContent:"center",margin:"auto"}}>
      <Title className='p-3'>CREATE NEW ACCOUNT</Title>

      <Form.Group className="my-4" controlId="formPlainText" >
        <Form.Control type="text" placeholder="Name" onChange={e => setUser({...user, name: e.target.value})} required />
      </Form.Group>
      <Form.Group className="my-4" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} onInput={emailValidate} required/>
        <Form.Text className="text-muted">{emailMsg}</Form.Text>
      </Form.Group>

      <Form.Group className="my-4" controlId="formBasicPassword">    
        <Form.Control type="password" placeholder="Password" onChange={e => setUser({...user, password: e.target.value})} onInput={passwordValidate} required/>
        <Form.Text className="text-muted">{passwordMsg}</Form.Text>
      </Form.Group>
      <Button  type="submit" onClick={userSignup} style={{width:"100%"}} className="my-4" >
        Submit
      </Button>
    </Form>
    <div className='col-md-3'></div>   
    </Container>

    <Routes>
     
      <Route path='/products' element={<ProductList/>}/>
    </Routes>
   
    </>
   
    
  );
}

export default SignupForm;