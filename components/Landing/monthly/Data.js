import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function Data (props) {
  return (
    <div className='data-test'>
      <div className='background'>
        <div className='left'></div>
        <div className='right'></div>
      </div>
      <div className='details'>
        <div className='header-row row'>
          <div className='column'>
            <h3>
              Funding <br />
              Options
            </h3>
          </div>
          <div className='column'>
            <h3>30 Days</h3>
            <p className='description'>Subscription Cycle. Cancel Anytime!</p>
          </div>
        </div>

        <div className='row'>
          <p>Trading Platform </p>
          <p>MetaTrader5</p>
        </div>
        <div className='row'>
          <p>
            Trading Hours{' '}
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>Trades can be placed anytime of the day.</Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>24/5</p>
        </div>

        <div className='row'>
          <p>
            Withdrawal Target{' '}
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  Withdrawal requests must be made before the 20th is each
                  month. Withdrawals are paid between the 25th - 30th of every
                  month via Bank Transfer, Paypal, Skrill, Mobile Money,
                  Interac, Cash Pick up and Bitcoin.
                </Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>Five Percent</p>
        </div>
        <div className='row'>
          <p>
            Drawdown Limit
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>The drawdown limit refers to closed trades.</Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>Ten Percent</p>
        </div>
        <div className='row'>
          <p>
            Trading Products
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  Forex and Gold are available by default. Cryptos and Indices
                  needs to be unlocked in your portfolio to confirm your
                  eligibility.
                </Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>Forex, Gold, Cryptos* and Indices*</p>
        </div>
        <div className='row'>
          <p>Account Leverage</p>
          <p>{props.leverage}</p>
        </div>
        <div className='row'>
          <p>
            Profit Share
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  Profit share to the trader on the 12,500 & 25,000 account is
                  60%. On the 50,000 account it is 55%
                </Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>up to 60%</p>
        </div>
        <div className='row'>
          <p>
            Position Holding
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  Trades can be held overnight and over the weekend
                </Tooltip>
              }
            >
              <span className='pTableiconWrap'>
                <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
                  <g>
                    <path
                      d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
                    ></path>
                    <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
                    <path
                      d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
                    ></path>
                  </g>
                </svg>

                <svg
                  className='pTableicon pTableiconNotAtive'
                  viewBox='0 0 14 14'
                >
                  <path
                    d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
                  ></path>
                </svg>
              </span>
            </OverlayTrigger>
          </p>
          <p>Overnight and Over the weekend</p>
        </div>
        <div className='left-row row'>
          <div className='column'></div>
          <div className='column'>
            <div className='bottom'>
              <div className='hideBtn'>
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
      </div>
    </div>
  )
}

export default Data
