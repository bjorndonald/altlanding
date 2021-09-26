import React, { useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import MonthlySection from './MonthlySection'
import AltMonthly from './AltMonthly'

function AltLandingSectionTwo () {
  const [cadText, setCadText] = useState('85')
  const [leverage, setLeverage] = useState('1:6')
  const activate = e => {
    $(e.target)
      .parent()
      .find('a')
      .removeClass('active')
    $(e.target).addClass('active')
  }

  const toggleSwitch = e => {
    $(e.target)
      .parent()
      .css('z-index', '4')
    $(e.target)
      .parent()
      .parent()
      .find('.nav-item')
      .each((i, x) => {
        console.log(x)
        if (
          $(x)
            .find('a')
            .hasClass('active')
        ) {
          $(x).css('z-index', '2')
        }
      })
  }

  const changeText = () => {}
  return (
    <div className='altLandingSectionTwo'>
      <div className='container'>
        <h4>Get 25% off your first plan</h4>
        <Tab.Container id='nav-tab-example' defaultActiveKey='monthly'>
          <div className='col-12 text-center '>
            <div className='priceTableNav d-flex justify-content-center mb-4'>
              <Nav>
                <Nav.Item style={{ zIndex: 4 }}>
                  <Nav.Link onClick={toggleSwitch} eventKey='monthly'>
                    Monthly
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ zIndex: 2 }}>
                  <Nav.Link onClick={toggleSwitch} eventKey='onetime'>
                    One Time
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className='col-12'>
            <Tab.Content className='mt-1'>
              <Tab.Pane eventKey='monthly'>
                <div className='row funding-prices'>
                  <div className='col-12 text-center mb-5 '>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 85</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('85')
                          setLeverage('1:6')
                          activate(e)
                        }}
                        className='btnCad85 active btn btn-outline-dark mx-1'
                      >
                        USD 12,500
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 170</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('170')
                          activate(e)
                          setLeverage('1:6')
                        }}
                        className='btnCad170 btn btn-outline-dark mx-1'
                      >
                        USD 25,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 345</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('345')
                          activate(e)
                          setLeverage('1:3')
                        }}
                        className='btnCad345 btn btn-outline-dark mx-1'
                      >
                        USD 50,000
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className='col-12 row mx-0 justify-content-center'>
                  <AltMonthly leverage={leverage} cadText={cadText} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='onetime'>
                <p className='mb-4' style={{ textAlign: 'center' }}>
                  Pay Once, Get Funded
                </p>
                <div className='row funding-prices'>
                  <div className='col-12 text-center mb-5 '>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 60</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('60')
                          activate(e)
                        }}
                        className='btnCad85 btn btn-outline-dark mx-1'
                      >
                        USD 5,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 85</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('85')
                          activate(e)
                        }}
                        className='btnCad170 btn btn-outline-dark mx-1'
                      >
                        USD 10,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 170</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('170')
                          activate(e)
                        }}
                        className='btnCad345 btn btn-outline-dark mx-1'
                      >
                        USD 25,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 302</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('302')
                          activate(e)
                        }}
                        className='btnCad345 btn btn-outline-dark mx-1'
                      >
                        USD 50,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 545</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('545')
                          activate(e)
                        }}
                        className='btnCad345 btn btn-outline-dark mx-1'
                      >
                        USD 100,000
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>CAD 905</Tooltip>}
                    >
                      <a
                        onClick={e => {
                          setCadText('905')
                          activate(e)
                        }}
                        className='btnCad345 btn btn-outline-dark mx-1'
                      >
                        USD 200,000
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className=' one-time row d-flex align-items-stretch  pTable'>
                  <div className='col-12 col-md-3 d-flex align-items-start justify-content-end'>
                    <div className='pTableDetailWrap w-80'>
                      <div className='pTableDetail '>
                        <h3></h3>
                        <ul>
                          <li>Leverage</li>
                          <li>
                            Trading Period
                            <OverlayTrigger
                              placement={'top'}
                              overlay={
                                <Tooltip>
                                  Trading period refers to the overall duration
                                  of the evaluation.
                                </Tooltip>
                              }
                            >
                              <span className='pTableiconWrap'>
                                <svg
                                  className='pTableicon pTableiconAtive'
                                  viewBox='0 0 14 14'
                                >
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
                          </li>
                          <li>
                            Total Profit Target (2 Stages)
                            <OverlayTrigger
                              placement={'top'}
                              overlay={
                                <Tooltip>
                                  Profit target means that a trader must hit a
                                  profit in the sum of closed positions on the
                                  assigned trading account.
                                </Tooltip>
                              }
                            >
                              <span className='pTableiconWrap'>
                                <svg
                                  className='pTableicon pTableiconAtive'
                                  viewBox='0 0 14 14'
                                >
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
                          </li>
                          <li>
                            Drawdown Limit
                            <OverlayTrigger
                              placement={'top'}
                              overlay={
                                <Tooltip>
                                  This means, the equity of the trading account
                                  must not, at any moment during both stages
                                  duration, reach a loss of -10%.
                                </Tooltip>
                              }
                            >
                              <span className='pTableiconWrap'>
                                <svg
                                  className='pTableicon pTableiconAtive'
                                  viewBox='0 0 14 14'
                                >
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
                          </li>
                          <li>
                            Minimum trading days
                            <OverlayTrigger
                              placement={'top'}
                              overlay={
                                <Tooltip>
                                  A trading day is defined as a day when at
                                  least one trade is placed.
                                </Tooltip>
                              }
                            >
                              <span className='pTableiconWrap'>
                                <svg
                                  className='pTableicon pTableiconAtive'
                                  viewBox='0 0 14 14'
                                >
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
                          </li>
                          <li>
                            Profit Share
                            <OverlayTrigger
                              placement={'top'}
                              overlay={
                                <Tooltip>
                                  Profit share is 85% to the Traders and it’s
                                  only available on the live funded account
                                </Tooltip>
                              }
                            >
                              <span className='pTableiconWrap'>
                                <svg
                                  className='pTableicon pTableiconAtive'
                                  viewBox='0 0 14 14'
                                >
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-md-3 d-flex align-i justify-content-endtems-start'>
                    <div className='pTableSingleListWrap w-80'>
                      <div className='pTableSingleList'>
                        <h3>Stage One</h3>
                        <p>First step of the evaluation</p>
                        <ul>
                          {/* <li>85%</li> */}
                          <li>1:200</li>
                          <li>Thirty Days </li>
                          <li>Ten Percent</li>
                          <li>Ten Percent</li>
                          <li>Ten Day</li>
                        </ul>
                        <div className='mb-4'>
                          <p>
                            <small>
                              Fifty Percent or 5% daily loss limit{' '}
                              <OverlayTrigger
                                placement={'top'}
                                overlay={
                                  <Tooltip>
                                    <b>
                                      Traders will be allowed to choose between
                                      having a 50% positive day on their
                                      evaluation or daily loss limit.
                                    </b>
                                  </Tooltip>
                                }
                              >
                                <span className='pTableiconWrap'>
                                  <svg
                                    className='pTableicon pTableiconAtive'
                                    viewBox='0 0 14 14'
                                  >
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
                            </small>
                          </p>
                        </div>
                        <h4>Price {'CAD ' + cadText}</h4>
                        <a
                          className='btn btn-primary cadText85'
                          href='https://fund.traderscentral.com/sign-up'
                        >
                          Get Funded
                        </a>

                        <small className='mt-2'>
                          Click the button above to make payment
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-md-3 d-flex align-i justify-content-endtems-start'>
                    <div className='pTableSingleListWrap'>
                      <div className='pTableSingleList'>
                        <h3>Stage Two</h3>
                        <p>First step of the evaluation</p>
                        <ul>
                          {/* <li>85%</li> */}
                          <li>1:200</li>
                          <li>Sixty Days</li>
                          <li>Five Percent</li>
                          <li>Ten Percent</li>
                          <li>Ten days</li>
                        </ul>
                        <div className='mb-4'>
                          <p>
                            <small>
                              Fifty Percent or 5% daily loss limit{' '}
                              <OverlayTrigger
                                placement={'top'}
                                overlay={
                                  <Tooltip>
                                    <b>
                                      Traders will be allowed to choose between
                                      having a 50% positive day on their
                                      evaluation or daily loss limit.
                                    </b>
                                  </Tooltip>
                                }
                              >
                                <span className='pTableiconWrap'>
                                  <svg
                                    className='pTableicon pTableiconAtive'
                                    viewBox='0 0 14 14'
                                  >
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
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  )
}

export default AltLandingSectionTwo
