import React, { Fragment, useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import MetaTag from './../components/MetaTag'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../store/actions/configActions'
import LandingSectionOne from '../components/Landing/LandingSectionOne'
import LandingSectionTwo from '../components/Landing/LandingSectionTwo'
import LandingSectionThree from '../components/Landing/LandingSectionThree'
import AltLandingSectionTwo from '../components/Landing/AltLandingSectionTwo'

function Landing (props) {
  // props.clearTimeline()
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()
  // props.setTimeline(hc_tl)
  // // console.log(hc_tl)
  // useEffect(() => {
  //   // props.setTimeline(hc_tl)
  //   return () => {
  //     props.clearTimeline()
  //   }
  // }, [])
  useEffect(() => {
    $('.top-menu').hide()
    return () => {}
  }, [])

  return props.loading ? null : (
    <Fragment>
      <MetaTag
        description={`Traders Central offers a suite of financial products, including Funding, Spot cryptocurrency Exchanging, and Liquidity services with a mission to decentralize finance to everyone.`}
        title='Traders Central | Decentralizing Finance For Everyone'
      />
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
          integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
          crossOrigin='anonymous'
        ></script>

        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
          crossOrigin='anonymous'
        ></script>
        <script
          type='text/javascript'
          src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
          async
        ></script>
        {/* <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script> */}
        <script src='/js/script.js'></script>
      </Head>
      <LandingSectionOne />
      <AltLandingSectionTwo />
      <LandingSectionThree />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setTimeline: timeline => {
    dispatch(setTimeline(timeline))
  },
  clearTimeline: () => {
    dispatch(clearTimeline())
  }
})

const mapStateToProps = state => ({
  questions: state.config.questions,
  timeline: state.config.timeline,
  loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
