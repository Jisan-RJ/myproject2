import React from 'react'
import "./banner.css"
// import { MdArrowDropDown } from "react-icons/md";
// import ban from "../../assets/06.jpg"
import { Col, Container } from 'react-bootstrap'
const Banner = () => {
  return (
    <section className='banner'>
        <Container>
            <Col className='ban-text' lg={8} md={10}>
                <h1>Search Your One From <span>Thousands</span> Of Products</h1>
                <input type='text' className='cat' placeholder='All Categories' ></input>
                <input className='search' placeholder='Search Your Products'></input>
                <p>We Have The Largest Collection of Products</p>
            </Col>
        </Container>
    </section>
  )
}

export default Banner