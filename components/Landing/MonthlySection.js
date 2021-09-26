import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import Left from './monthly/Left'
import Right from './monthly/Right'
import Data from './monthly/Data'

function MonthlySection (props) {
  const [cadText, setCadText] = useState('85')
  const [leverage, setLeverage] = useState('1:6')
  const activate = e => {
    $(e.target)
      .parent()
      .find('a')
      .removeClass('active')
    $(e.target).addClass('active')
  }
  return (
    <Fragment>
      <p className='mb-4' style={{ textAlign: 'center' }}>
        Live funding in 24 hours, no evaluation needed
      </p>
      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 85</Tooltip>}>
            <a
              onClick={e => {
                setCadText('85')
                setLeverage('1:6')
                activate(e)
              }}
              className='btnCad85 btn btn-outline-dark mx-1'
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
      <div className='monthly row d-flex align-items-stretch pTable'>
        <Left />
        <Right cadText={cadText} leverage={leverage} />
      </div>
    </Fragment>
  )
}

export default MonthlySection
