import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Burger from '../../assets/Photos/hero-2.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section className='HeroSection'>
      <Container>
        <Row>
          <Col lg={7} className='mb-5 mb-lg-0'>
            <div className='position:relative '>
              <img src={Burger} className=' Burger_img img-fluid' alt="" />
              <div className='price-badge'>
                <div className='badge-text'>
                  <h4 className='only'>Only</h4>
                  <h4 className='Rs'>Rs 99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='hero_text text-center'>
              <h1 className=' Burger text-white'>New Burger</h1>
              <h2 className='Onion text-white'>With Onion</h2>
              <p className=' Lorem text-white pt-2 pb-4'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat</p>
            </div>
            <Link to='/' className='btn order_now'>
              Order Now
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section1