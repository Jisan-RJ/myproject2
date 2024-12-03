import React, { useEffect, useState } from 'react'
import "./mobile.css"
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap'
const Mobile = () => {
    let [mobile, setMobile] = useState([])
    let getMobile = ()=>{
        axios.get("https://dummyjson.com/products/category/mobile-accessories").then((mob)=>{
            setMobile(mob.data.products)
        })
    }

    useEffect(()=>{
        getMobile()
    },[])
  return (
    <section className='mobile'>
        <Container>
        <Row>
                <Col lg={12} md={12}>
                    {mobile.map((mo)=>(
                        <>
                        <Row className='justify-content-between'>
                        <Col lg={6} md={12} className='yo'>
                            <img src={mo.images[0]}></img>
                            </Col>
                        <Col lg={6} md={12} className='details'>
                            <h3>{mo.title}</h3>
                            <p>{mo.description}</p>
                            <a className='price'>Price: {mo.price} USD</a>
                            <a className='rate'>Rating: <FaStar /><FaStar /><FaStar /><FaStar />({mo.rating})</a>
                            <h4>Availability: {mo.availabilityStatus}</h4>
                            <h4 className='dimension'>Item Dimensions</h4>
                            <div className='yoyo'>
                            <h5>Item Width: {mo.dimensions.width} in</h5>
                            <h5>Item Height: {mo.dimensions.height} in</h5>
                            <h5>Item Depth: {mo.dimensions.depth} in</h5>
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

export default Mobile