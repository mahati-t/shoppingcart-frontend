import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate} from 'react-router-dom';

import ProfileForm from './ProfileForm';



const Profile =() =>{
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
    navigate('/login')
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

  console.log(user);
  return (
    <>
    <ProfileForm user={user} />
       <div className='container '>
        <div className='mx-4 px-4 mb-4 pb-4'>
          <NavLink to={`/products`}>  
             <Button className='mx-4'>close</Button>
          </NavLink>
          <NavLink to={`/editProfile`}>  
             <Button >Edit Profile</Button>
          </NavLink>
        </div>
    </div>
    </>
  );
  
}

export default Profile;