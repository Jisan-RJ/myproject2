import React, { useEffect, useState } from 'react'
import "./laptop.css"
import axios from 'axios';
import { FaStar } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
const Laptop = () => {
    let [laptop, setLaptop] = useState([])


    let getLaptop = ()=>{
        axios.get("https://dummyjson.com/products/category/laptops").then((lap)=>{
            setLaptop(lap.data.products)
        })
    }

    useEffect(()=>{
        getLaptop()
    },[])
  return (
    <section className='laptop'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    {laptop.map((lo)=>(
                        <>
                        <Row className='justify-content-between'>
                        <Col lg={6} md={12} sm={12} className='yo'>
                            <img src={lo.images[1]}></img>
                            </Col>
                        <Col lg={6} md={12} sm={12} className='details'>
                            <h3>{lo.title}</h3>
                            <p>{lo.description}</p>
                            <a className='price'>Price: {lo.price} USD</a>
                            <a className='rate'>Rating: <FaStar /><FaStar /><FaStar /><FaStar />({lo.rating})</a>
                            <h4>Availability: {lo.availabilityStatus}</h4>
                            <h4 className='dimension'>Laptop Dimensions</h4>
                            <div className='yoyo'>
                            <h5>Laptop Width: {lo.dimensions.width} in</h5>
                            <h5>Laptop Height: {lo.dimensions.height} in</h5>
                            <h5>Laptop Depth: {lo.dimensions.depth} in</h5>
                            </div>
                        </Col>
                        </Row>
                        </>
                    ))}
                    </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Laptop