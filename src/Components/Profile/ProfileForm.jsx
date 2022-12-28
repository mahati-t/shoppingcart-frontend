import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const ProfileForm = (props) => {
    const {user} = props;

    const [username, setUser] = useState({city: ' ',email: '',name: '',
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

  return (
    <div className='container'>
      <Form className='mx-4 px-4 mt-4 pt-4' >
            <h2 style={{textAlign:"center",margin:"auto"}}>My Profile</h2>
            <Form.Group className="m-2 p-4" >
            <Form.Label className='mt-2' style={{fontWeight:"bold"}}>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={user.name}
                readOnly
                className='mb-3'
               
              />
              <Form.Label style={{fontWeight:"bold"}}>Email address</Form.Label>
              <Form.Control
                type="email"               
                autoFocus
                value={user.email}
                className='mb-3'
              />
              <Form.Label style={{fontWeight:"bold"}}>Password</Form.Label>
              <Form.Control
                type="password"               
                autoFocus
                value={user.password}
                readOnly
                className='mb-3'
              />
              <Form.Label style={{fontWeight:"bold"}}>Phone Number</Form.Label>
              <Form.Control
                type="text"              
                autoFocus
                value={user.phoneNumber}
                readOnly
                className='mb-3'
              />
              <Form.Label style={{fontWeight:"bold"}}>Street</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                value={user.street}
                readOnly
                className='mb-3'
              />
               <Form.Label style={{fontWeight:"bold"}}>City</Form.Label>
              <Form.Control
                type="text"               
                autoFocus
                onChange={(e) => setUser({...user, city: e.target.value})}
                value={user.city}
                readOnly
                className='mb-3'
              />
               <Form.Label style={{fontWeight:"bold"}}>State</Form.Label>
              <Form.Control
                type="text"                
                autoFocus
                value={user.state}
                readOnly
                className='mb-3'
              />
               <Form.Label style={{fontWeight:"bold"}}>Pincode</Form.Label>
              <Form.Control
                type="text"               
                autoFocus             
                value={user.pinCode}
                readOnly
                className='mb-3'
              /> 
               
            </Form.Group>
            
          
          </Form>
   
    </div>
  )
}

export default ProfileForm