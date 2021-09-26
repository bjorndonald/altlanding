import React from 'react'

function LandingSectionOne () {
  return (
    <div className='landingSectionOne'>
      <div className='container'>
        <div className='row col-12 justify-content-between'>
          <div className='col-md-5 col-12'>
            <h2>The funding solution you need</h2>
            <p>
              Choose between our monthly and one time plans. Trade anytime, hold
              trades overnight and over weekends
            </p>
            <form action=''>
              <div className='inputWrap'>
                <i className='fa fa-envelope-o' aria-hidden='true'></i>
                <input type='text' placeholder='your@email.com' />
              </div>
              <div className='button'>
                <a href='' className='btn btn-black'>
                  Start free trial
                </a>
              </div>
            </form>
          </div>
          <div className='col-md-4 col-12'>
            <img src='/images/landing/one.gif' alt='' />
            {/* <video loop={true} autoPlay='autoplay' playsInline muted={true}>
              <source src='/images/landing/one.gif' type='video/mp4' />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingSectionOne
