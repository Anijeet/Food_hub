import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../assets/Photos/pizza.png'
import Salad from '../../assets/Photos/salad.png'
import Delivery from '../../assets/Photos/delivery-bike.png'

const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
  ];
function Section2() {
  return (
    <>
        <section className="about_section">
            <Container>
                <Row>
                    <Col lg={{ span:8, offset:2}} className='text-center'>
                        <h2>The Food taste better when you eat it with your family</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, velit nam. Voluptas soluta hic suscipit, ipsam quia aliquam. Accusamus officiis deleniti veritatis provident commodi eaque.
                        </p>
                        <Link to='/' className='btn oder_now btn_red'>
                            Explore Full Menu
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='about_wrapper'>
            <Container>
                <Row className='justify-content-md-center'>
                    {mockData.map((cardData,index)=>(
                        <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                            <div className='about_box text-center'>
                                <div className='about-icon'>
                                    <img src={cardData.image} className='img-fluid' width='25%' alt="icon" />
                                </div>
                                <h4>{cardData.title} </h4>
                                <p>{cardData.paragraph} </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section2