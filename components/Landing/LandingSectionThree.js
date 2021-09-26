import React, { Component, createRef } from 'react'

const TrustBox = ({ trustBoxRef }) => (
  <div
    ref={trustBoxRef}
    class='trustpilot-widget'
    data-locale='en-US'
    data-template-id='5613c9cde69ddc09340c6beb'
    data-businessunit-id='5ccc70aa442b4b00014a6d17'
    data-style-height='24px'
    data-style-width='100%'
    data-theme='light'
  >
    <a
      href='https://www.trustpilot.com/review/traderscentralfund.com'
      target='_blank'
      rel='noopener'
    >
      Trustpilot
    </a>
  </div>
)

export class LandingSectionThree extends Component {
  constructor (props) {
    super(props)
    this.trustBoxRef = React.createRef()
  }
  componentDidMount () {
    // if (window.Trustpilot) {
    //   window.Trustpilot.loadFromElement(this.ref.current, true)
    // }
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(this.trustBoxRef.current, true)
    }
  }
  render () {
    return (
      <div className='landingSectionThree'>
        <div className='container'>
          <div className='row'>
            <h2>
              What users say <br />
              about us
            </h2>
          </div>
          <div className='row'>
            <TrustBox trustBoxRef={this.trustBoxRef} />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingSectionThree
