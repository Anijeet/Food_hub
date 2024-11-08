import React, { useState } from 'react'
import '../../Style/Header.css'
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/Photos/Logo.png'

function Header() {

  const[nav,setNav]=useState(false)

  const changeValueonScroll =()=>{
    const scrollValue=document?.documentElement?.scrollTop
    scrollValue > 100 ? setNav(true): setNav(false)

  };
  window.addEventListener('scroll', changeValueonScroll)
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
    <Container>
      <Navbar.Brand href="#home">
        <Link to='/' className='logo'><img src={Logo} alt="Logo" className='img-fluid' /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to='/' >Home</Nav.Link>
          <Nav.Link as={Link} to='/about' >About</Nav.Link>
          <Nav.Link as={Link} to='/menu' >Menu</Nav.Link>
          <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
          <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
          <Nav.Link as={Link} to='/' >
          <div className='cart'>
          <i class="bi bi-bag-check fs-5"></i>   {/* here fs-5 is the size of the cart icon given by bootsrap function */}
          <span className='number_cart'>1</span>
            </div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  )
}

export default Header