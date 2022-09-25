import React from 'react'
import Ndata from './../Data/NData';

function NewArrivals() {
  return <>
  <div className="headline pt-3 d-flex align-items-center justify-content-between">
    <div className='d-flex align-items-center'>
        <img className='newArrIcon' src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
        <h4 className='mb-0 ms-1 fw-bold'>New Arrivals</h4>
        </div>
        <span className='viewAll'>View All <i class="fa-solid fa-caret-right"></i></span>
    </div>
    <div className='newArrBox'>
        <div className="row">
            {
            Ndata.map((arrival, id) => <>
                <div className="col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center" key={id}>
                    <div className="arrItem">
                        <div className="img">
                            <img className='w-100' src={arrival.cover} alt={arrival.name} />
                        </div>
                        <div className="descArr mb-1">
                            <h5>{arrival.name}</h5>
                            <span>${arrival.price}</span>
                        </div>
                    </div>
                </div>
                </>
                )}
        </div>
    </div>

    </>
}

export default NewArrivals