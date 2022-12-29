import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import '../orderHistory.css'
import OrderDetails from './OrderDetails';


const OrderHistoryDetails = () => {
    const navigate = useNavigate();
    const [orderList,setOrderList] = useState([]);
    const [selected, setSelected] = useState(null);

    const toggle = (i)=>{
        if (selected === i){
            setSelected(null);
        }
        setSelected(i);
    }

    useEffect(()=>{
        const uid = localStorage.getItem("userId");
        if(uid===null){
          navigate('/login');
        }
        else{
            axios.get(`http://localhost:8080/order/${uid}/getOrders`)
          .then(response =>{
            //   console.log(response.data)
              setOrderList(response.data);              
          }) 
        }           
    },[])

    if(orderList.length===0){
        return(
            <div className='m-4 p-4' >
                <h1 className='m-4 p-4' style={{textAlign:"center",justifyContent:"center"}}>No Orders Placed</h1>
                <NavLink to={`/products`}><button className="my-1 py-2">CONTINUE SHOPPING</button></NavLink>
                </div>
        )
    }
    else{
        return (
            <div className='container'>
                <h2  className='m-2 p-2' style={{textAlign:"center"}}>Order Details</h2>
                <div className='wrapper'>
                    
                    <div className='accordion'>
                        {orderList.map((order, index)=>(
                           <div className='item'>
                            <div className='title mt-3 px-3 py-2' onClick={()=> toggle(index)}>
                               <h6>ORDER ID : {order.orderId}</h6>                  
                            </div>
                            <div className={selected === index? 'content show':'content'}>
                                <OrderDetails order={order} />
                            </div>
                            
                           </div>
                        ))}
                    </div>
                </div>
              </div>
           
          )

    }
  
}

export default OrderHistoryDetails