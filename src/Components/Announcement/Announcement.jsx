import React from 'react'

function Announcement() {
  return <>
    <div className="Announ">
      <div className="row">
        <div className="col-sm-4">
          <div className="banner">
            <img className='w-100' src="./images/banner-1.png" alt="30% off on Watch" />
          </div>
        </div>
        <div className="col-sm-8">
        <div className="banner">
            <img className='w-100' src="./images/banner-2.png" alt="limited light bulb" />
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Announcement