import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoutModal from './LogoutModal';



const NavigationBar = () => {

  const [userId, setUserId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(()=>{
    setUserId(localStorage.getItem("userId"));
  },[userId])

  return (
 
    <div>
      <nav  className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className='container'>
          <NavLink className="navbar-brand fw-bold fs-4 " to="/">Shopping cart</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-lg-0">
              
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products/categories">
                      Categories
                    </NavLink>
                </li>
            </ul>
             <ul className="navbar-nav  mb-lg-0">
                <li className="nav-item">
                    {userId===null ?<NavLink  className="nav-link" to="/login" >
                    Login </NavLink>:null}
                </li>

                <li className="nav-item">
                    {userId===null ?<NavLink  className="nav-link" to="/signup" >
                    Register</NavLink>: null}
                </li>

                <li className="nav-item">
                    {userId===null ? null:
                    <NavLink className="nav-link" to="/cart"> Cart</NavLink>}
                </li>
                

                <li className="nav-item">
                    {userId===null ? null:
                    <NavLink className="nav-link" to="/orderHistory">Order History</NavLink>}               
                </li>

                <li className="nav-item">
                    {userId===null ? null:<NavLink className="nav-link" to="/profile" >
                    Profile</NavLink>}
                </li>
                
                <li className="nav-item">
                {userId==='111' ? <NavLink to="/products/addProduct" className="nav-link" >
                Add Product</NavLink>:null}
                </li>

                <li className="nav-item">
                    {userId===null ? null: <NavLink className='nav-link' onClick={()=> setModalShow(true)}>
                    Logout</NavLink>}
                    <LogoutModal show={modalShow} onHide={() => setModalShow(false)}/>
                </li>              
             
          
            </ul>
    
          </div>
        </div>
      </nav>
    </div>

  )
}

export default NavigationBar