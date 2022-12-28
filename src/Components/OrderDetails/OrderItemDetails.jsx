import React from 'react'

const OrderItemDetails = (props) => {
    const {orderItem} = props;
  return (   
         <div className="card mx-4 my-2 p-2 ">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={orderItem.product.url} className="card-img-top " alt={orderItem.product.name} height="300px"/>
          </div>
          <div className="col-md-9">
            <div className="card-body px-4">
              <h4 className="text-uppercase text-black-50">{orderItem.product.category}</h4>
              <h5 className="card-title fw-bold  mb-2">{orderItem.product.name}</h5>
              <p className="card-text">{orderItem.product.details}</p>
              <h4 className="my-4 text-grey-15">Rs. {orderItem.product.price} /-</h4>
              <h6 className="text-black-10">Quantity: {orderItem.quantity}</h6>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default OrderItemDetails