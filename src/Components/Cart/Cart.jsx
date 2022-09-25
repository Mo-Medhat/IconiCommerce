import React from 'react'
import { useContext } from 'react';
import { APIContext } from '../Context/APIContext';

function Cart() {

  const { cardItem, addToCart, removeCart, decreaseCart } = useContext(APIContext)

    const totalPrice = cardItem.reduce((price, item) => price + item.qty * item.price, 0 )

  return <>
    <section className='bgSection'>
        <div className="container">
            <div className="row justify-content-between py-5 gy-3">
                {cardItem == 0 ? <><div className="col-8 d-flex align-items-center"> <h1 className='noItems'>No Items Are Add In Cart</h1> </div></>: <>
                <div className="col-md-8">
                {cardItem.map((item, id) => {const productQty = item.price * item.qty 
                return <>
                 <div className="col-md-10" key={id}>
                    <div className='product flex-md-column align-items-md-stretch flex-lg-row align-items-lg-center align-items-sm-center'>
                        <div className="img">
                            <img className='w-100' src={item.cover} alt={item.name} />
                        </div>
                        <div className="descriptionSide d-flex flex-column">
                        <div className="removeItem ms-auto">
                            <button onClick={() => removeCart(item)} className='btn-special xMarkBtn'>
                                <i className='fa-solid fa-xmark fa-fw'></i>
                            </button>
                        </div>
                        <div className="productTitle mt-3">{item.name}</div>
                        <div className="descProduct d-flex justify-content-between align-items-center mt-2">
                            <h5 className='mb-0'>Price: ${item.price}.00</h5>
                        </div>
                        <div className="cartControl d-flex justify-content-between align-items-center my-2">
                        <div className="quantity fs-5">{item.qty}</div>
                        <div className='d-flex'>
                        <div className="incItem me-1">
                        <span className='btn-special btnPlus'  onClick={() => addToCart(item)} ><i class="fas fa-plus"></i></span>
                        </div>
                        <div className="decItem">
                        <span className='btn-special btnPlus'  onClick={() => decreaseCart(item)} ><i class="fas fa-minus"></i></span>
                        </div>
                        </div>
                        </div>
                        <div className="lastPrice mt-1">
                            <h5>Total: ${productQty}.00</h5>
                        </div>
                     
                        </div>
                    </div>
                </div>
                </>
               })}
               </div>
                </>}
              
                <div className="col-md-4 ">
                <div className="totalSection d-flex flex-column m-3 p-3">
                <h3 className='fw-bold'>Cart Summary</h3>
                <div className="d-flex justify-content-between align-items-center my-3">
                <h5 className='fw-bold'>Total Price:</h5>
                <h4>${totalPrice}.00</h4>
                </div>
               </div></div>
            </div>
        </div>
    </section>
  </>
}

export default Cart