import React, { useContext } from 'react'
import { APIContext } from './../Context/APIContext';
import CategoriesMob from './CategoriesMob/CategoriesMob';

function Shop() {

    const {shopItems, count, Increment, addToCart} = useContext(APIContext)

    
  return <>
    
    <div className="shop">
    <div className="row flex-column flex-md-row">
        <div className="col-sm-12 col-md-4">
            <div className="mobBrands">
                <CategoriesMob/>
            </div>
        </div>
        <div className="col-sm-12 col-md-8">
            <>
            <div>
                <div className="headline pt-3 d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <h4 className='mb-0 ms-1 fw-bold'>Mobile Phones</h4>
                    </div>
                        <span className='viewAll'>View All <i class="fa-solid fa-caret-right"></i></span>
                </div>
                    <div className="shops row g-3 my-1">
                    {shopItems.map((shopItem, id) => <>
                        <div className="col-12 col-sm-6 col-md-4" key={id}>
                            <div className="productCard">
                                <div className="saleProduct">
                                    <p className='mb-0'>{shopItem.discount}% Off</p>
                                </div>
                                <div className="productImg">
                                    <img className='w-100' src={shopItem.cover} alt={`${shopItem.name} Product`} />
                                </div>
                                    <div className="desc">
                                    <div className="productLike">
                                        <h5 className='mb-0'>{count}</h5>
                                        <i  onClick={Increment}  class="fa-regular fa-heart"></i>
                                    </div>
                                    <div className="productTitle">{shopItem.name}</div>
                                    <div className="rate d-flex">
                                    <i class="fa-solid fa-star fa-fw"></i>
                                    <i class="fa-solid fa-star fa-fw"></i>
                                    <i class="fa-solid fa-star fa-fw"></i>
                                    <i class="fa-solid fa-star fa-fw"></i>
                                    <i class="fa-solid fa-star fa-fw"></i>
                                    </div>
                                    <div className="price"><h5>${shopItem.price}.00</h5>
                                    <span className='btn-special btnPlus' onClick={() => addToCart(shopItem)} ><i class="fas fa-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}

                    </div>
                </div>
                </>
        </div>
    </div>
    </div>

  </>
}

export default Shop