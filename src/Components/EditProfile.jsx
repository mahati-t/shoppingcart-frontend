import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const EditProfile =() =>{

  const navigate = useNavigate(); 
  const [user, setUser] = useState({city: ' ',email: '',name: '',
    password
    : 
    '',
    phoneNumber
    : 
    '',
    pinCode
    : 
   '',
    state
    : 
   '',
    street
    : 
    '',
    userID
    : 
    ''});

  

  useEffect (() =>{
    const uid = localStorage.getItem("userId");
    if(uid === null){
      navigate('/login');
    }
    else{
      setUser({...user, userID : uid})
      axios.get(`http://localhost:8080/getprofile/${uid}`)
      .then(res => 
        {
          // console.log(res.data)   
        setUser(res.data)}   
     )
     .catch(error => {
       console.log(error);
     })
    }  
  }
  ,[])

  const updateProfile =() =>{
    axios.post(`http://localhost:8080/updateprofile`,user)
    .then(response =>{
      // console.log(response);
    })
    .catch(error => 
      console.log(error));
    
  }

  //rendering the output on html 

    return (
     
      <div className='container'>
      <Form  className='mx-4 px-4 mt-4 pt-4' style={{border:"solid 1px grey", borderRadius:"4px"}}>
              <h3 style={{textAlign:"center",margin:"auto"}}>My profile</h3>
              <Form.Group className="m-2 p-4" >
  
              <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  value={user.name}
                  onChange={(e) => setUser({...user, name: e.target.value})}
                  className='mb-3'
                />
                <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Email address</Form.Label>
                <Form.Control
                  type="email"               
                  autoFocus
                  value={user.email}
                  readOnly
                  className='mb-3'
                />
                <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Password</Form.Label>
                <Form.Control
                  type="password"               
                  autoFocus
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  className='mb-3'
                />
                <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Phone Number</Form.Label>
                <Form.Control
                  type="text"              
                  autoFocus
                  value={user.phoneNumber}
                  onChange={(e) => setUser({...user, phoneNumber: e.target.value})}
                  className='mb-3'
                />
                <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Street</Form.Label>
                <Form.Control
                  type="text"               
                  autoFocus
                  onChange={(e) => setUser({...user, street: e.target.value})}
                  value={user.street}
                  className='mb-3'
                />
                 <Form.Label className='mt-2' style={{fontWeight:"bold"}}>City</Form.Label>
                <Form.Control
                  type="text"               
                  autoFocus
                  onChange={(e) => setUser({...user, city: e.target.value})}
                  value={user.city}
                  className='mb-3'
                />
                 <Form.Label className='mt-2' style={{fontWeight:"bold"}}>State</Form.Label>
                <Form.Control
                  type="text"                
                  autoFocus
                  onChange={(e) => setUser({...user, state: e.target.value})}
                  value={user.state}
                  className='mb-3'
                />
                 <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Pincode</Form.Label>
                <Form.Control
                  type="text"               
                  autoFocus
                  onChange={(e) => setUser({...user, pinCode: e.target.value})}
                  value={user.pinCode}
                  className='mb-3'
                /> 
                <Button variant="primary" onClick={updateProfile}>
              Save Changes
               </Button>
               <NavLink to={`/products`}>  
               <Button className='mx-3'>Cancel</Button>
               </NavLink>
             
              </Form.Group>
            
            </Form>
      </div>

    );
   
  
}

export default EditProfile;