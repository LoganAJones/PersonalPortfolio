import React, { useEffect, useState } from 'react'
import {Navbar,Container} from 'react-bootstrap';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState("false")

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onscroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span> 
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={} alt=""></img></a>
                <a href='#'><img src={} alt=""></img></a>
                <a href='#'><img src={} alt=""></img></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
                <span>Let's Connect!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
