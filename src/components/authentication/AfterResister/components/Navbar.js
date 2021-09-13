import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit'
import logo from 'images/logo/inovact-logo.png'
import { useEffect } from 'react'

function Navbar() {
    const [showNavText, setShowNavText] = useState(false)

    const handleLinkClick = () => {
        setShowNavText(false)
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('.nav-item')
        window.addEventListener('scroll', () => {
            let current = ''
            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section?.getAttribute('id')
                }
            })

            navLi.forEach((li) => {
                li.classList.remove('active')
                if (current && li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        })
    })

    return (
        <div className="navigation-bar">
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer>
                    <MDBNavbarBrand href="#">
                        <img src={logo} alt="Logo" />
                        kachra
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowNavText(!showNavText)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavText}>
                        <MDBNavbarNav
                            right
                            fullWidth={false}
                            className="mb-2 mb-lg-0"
                        >
                            <MDBNavbarItem className="about">
                                <MDBNavbarLink onClick={handleLinkClick}>
                                    <Link to="/home">Home</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="mission">
                                <MDBNavbarLink onClick={handleLinkClick}>
                                    <Link to="/segregation">Segregation</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="features">
                                <MDBNavbarLink onClick={handleLinkClick}>
                                    <Link to="/complaints">Complaints</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="testimonials">
                                <MDBNavbarLink onClick={handleLinkClick}>
                                    <Link to="/profile">Profile</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="contact">
                                <MDBNavbarLink onClick={handleLinkClick}>
                                    <Link to="/contact">Contact</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Navbar
