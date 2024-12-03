import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
    <section className='footer'>
    <Container>
        <div className='footer-item'>
        <Row>
            <Col lg={5} md={5} sm={12}>
                <a>
                    <img src={logo}></img>
                </a>
                <Col lg={8} md={10} sm={10}>
                <p>We are always open to discuss your project and improve your online presence.</p>
                </Col>
            </Col>
            <div className='yellow'>
                <div className='email'>
                    <h5>Email me at</h5>
                    <h6>contact@website.com</h6>
                </div>
                <div className='call'>
                    <h5>Call us</h5>
                    <h6>0927 6277 28525</h6>
                </div>
            </div>
            <Col lg={6} md={6} sm={12}>
                <h3>Lets Talk!</h3>
                <Col lg={8} md={10} sm={12}>
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                </Col>
                <a><FaFacebook /></a>
                <a><FaTwitter /></a>
                <a><FaInstagram /></a>
                <a><FaLinkedin /></a>
            </Col>
        </Row>
        </div>
    </Container>
</section>
  )
}

export default Footer