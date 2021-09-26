import React from 'react'

function Right (props) {
  return (
    <div className='col-12 col-md-3 d-flex justify-content-start'>
      {' '}
      <div className='pTableSingleListWrap w-90 pTableSingleListWrapRound'>
        <div className='pTableSingleList'>
          <h3>30 Days</h3>
          <p>Subscription Cycle. Cancel Anytime!</p>
          <ul>
            <li>MetaTrader5</li>
            <li>24/5</li>
            <li>Five Percent</li>
            <li>Ten Percent</li>
            <li>Forex, Gold, Cryptos* and Indices*</li>
            <li>{props.leverage}</li>
            <li>up to 60%</li>
            <li>Overnight and Over the weekend</li>
          </ul>
          <div className='mb-4 hideBtn'>
            <a
              className='btn btn-primary cadText85'
              href='https://fund.traderscentral.com/sign-up'
            >
              {'CAD ' + props.cadText}
            </a>
          </div>
          <p>Click the button above to make payment</p>
        </div>
      </div>
    </div>
  )
}

export default Right
