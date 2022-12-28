import React from 'react'
import OrderItemDetails from './OrderItemDetails';


const OrderDetails = (props) => {
  const {order} = props;
    const orderItems = order.orderItems;
    
  return (
    <div>
      {orderItems.map((orderItem, index)=>{
      return(
        <OrderItemDetails orderItem={orderItem}/>
      )
    })}
             
    </div>
  )
}

export default OrderDetails