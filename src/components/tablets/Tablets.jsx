import React, { useEffect, useState } from 'react'
import "./tablets.css";
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap'
const Tablets = () => {
    let [tab, setTab] = useState([])
    let getTab = ()=>{
        axios.get("https://dummyjson.com/products/category/tablets").then((tab)=>{
            setTab(tab.data.products)
        })
    }

    useEffect(()=>{
        getTab()
    },[])
  return (
    <section className="tab">
        <Container>
        <Row>
                <Col lg={12}>
                    {tab.map((to)=>(
                        <>
                        <Row className='justify-content-between'>
                        <Col lg={6} className='yo'>
                            <img src={to.images[0]}></img>
                            </Col>
                        <Col lg={6} className='details'>
                            <h3>{to.title}</h3>
                            <p>{to.description}</p>
                            <a className='price'>Price: {to.price} USD</a>
                            <a className='rate'>Rating: <FaStar /><FaStar /><FaStar /><FaStar />({to.rating})</a>
                            <h4>Availability: {to.availabilityStatus}</h4>
                            <h4 className='dimension'>Item Dimensions</h4>
                            <div className='yoyo'>
                            <h5>Item Width: {to.dimensions.width} in</h5>
                            <h5>Item Height: {to.dimensions.height} in</h5>
                            <h5>Item Depth: {to.dimensions.depth} in</h5>
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

export default Tablets