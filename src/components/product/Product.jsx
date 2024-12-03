import React, { useEffect, useState } from 'react'
import "./product.css"
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = () => {
    let [data, setData] = useState([])
    let [second, setSecond] = useState([])
    let [third, setThird] = useState([])
    let [fourth, setFourth] = useState([])
    let [fifth, setFifth] = useState([])
    let [sixth, setSixth] = useState([])
    let [seventh, setSeventh] = useState([])
    let [eighth, setEighth] = useState([])


    let findData = ()=>{
        axios.get("https://dummyjson.com/products/category/mobile-accessories").then((redo)=>{
            setSecond(redo.data.products);
            
        })
    }
    useEffect(()=>{
        findData()
    },[])

    let getData = ()=>{
        axios.get("https://dummyjson.com/products/category/laptops").then((response)=>{
            setData(response.data.products);
            
        })
    }

    useEffect(()=>{
        getData()
    },[])


    let metData = ()=>{
        axios.get("https://dummyjson.com/products/category/tablets").then((tumi)=>{
            setThird(tumi.data.products);
            
        })
    }

    useEffect(()=>{
        metData()
    },[])


    let hetData = ()=>{
        axios.get("https://dummyjson.com/products/category/beauty").then((she)=>{
            setFourth(she.data.products);
            
        })
    }

    useEffect(()=>{
        hetData()
    },[])



    let shetData = ()=>{
        axios.get("https://dummyjson.com/products/category/home-decoration").then((nai)=>{
            setFifth(nai.data.products);
            
        })
    }

    useEffect(()=>{
        shetData()
    },[])



    let funtData = ()=>{
        axios.get("https://dummyjson.com/products/category/furniture").then((ache)=>{
            setSixth(ache.data.products);
            
        })
    }

    useEffect(()=>{
        funtData()
    },[])



    let suntData = ()=>{
        axios.get("https://dummyjson.com/products/category/mens-shirts").then((real)=>{
            setSeventh(real.data.products);
            
        })
    }

    useEffect(()=>{
        suntData()
    },[])


    let mantData = ()=>{
        axios.get("https://dummyjson.com/products/category/mens-shoes").then((fake)=>{
            setEighth(fake.data.products);
            
        })
    }

    useEffect(()=>{
        mantData()
    },[])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            }
        ]
      };
  return (
    <section className='product'>
        <Container>
            <div className='heading'>
                <h5>CHOOSE ANY PRODUCTS</h5>
                <h3>Buy Everything With Us</h3>
            </div>


            <div className='item-type'>
                <h3>Electronics</h3>
            </div>


            <div className='product-head'>
                <h4>Check Out Latest Laptops</h4>
            </div>
            <Row className='first'>
                <Slider {...settings}>
                {data.map((item)=>(
                    <>
                        
                        <div className='first-item'>
                        <div className='overlay'>
                            <h4>{item.title}</h4>
                            <p>Price: {item.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={item.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
                </Slider>
            </Row>
            <div className='bbtn'>
                <a><Link to="/laptop">See More</Link></a>
            </div>
            <div className='product-head'>
                <h4>Check Out Mobile accessories</h4>
            </div>
            <Row className='second'>
               <Slider {...settings}>
               {second.map((ami)=>(
                    <>
                        
                    <div className='second-item'>
                        <div className='overlay'>
                            <h4>{ami.title}</h4>
                            <p>Price: {ami.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={ami.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>

            <div className='bbtn'>
                <a><Link to="/mobile">See More</Link></a>
            </div>

            <div className='product-head'>
                <h4>Check Out Latest Tablets</h4>
            </div>
            <Row className='third'>
               <Slider {...settings}>
               {third.map((me)=>(
                    <>
                        
                    <div className='third-item'>
                        <div className='overlay'>
                            <h4>{me.title}</h4>
                            <p>Price: {me.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={me.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>

            <div className='bbtn'>
                <a><Link to="/tablet">See More</Link></a>
            </div>

            <div className='item-type'>
                <h3>Beauty Items</h3>
            </div>
            <div className='product-head'>
                <h4>Check Out Latest Beauty Items</h4>
            </div>
            <Row className='fourth'>
               <Slider {...settings}>
               {fourth.map((go)=>(
                    <>
                        
                    <div className='fourth-item'>
                        <div className='overlay'>
                            <h4>{go.title}</h4>
                            <p>Price: {go.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={go.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>



            <div className='item-type'>
                <h3>Home Decoration & Furnitures</h3>
            </div>   
            <div className='product-head'>
                <h4>Check Out Elegent Home Decoration</h4>
            </div>
            <Row className='fifth'>
               <Slider {...settings}>
               {fifth.map((mo)=>(
                    <>
                        
                    <div className='fifth-item'>
                        <div className='overlay'>
                            <h4>{mo.title}</h4>
                            <p>Price: {mo.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={mo.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>

            <div className='product-head'>
                <h4>Check Out Stylish Furnitures</h4>
            </div>
            <Row className='sixth'>
               <Slider {...settings}>
               {sixth.map((po)=>(
                    <>
                        
                    <div className='sixth-item'>
                        <div className='overlay'>
                            <h4>{po.title}</h4>
                            <p>Price: {po.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={po.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>


            <div className='item-type'>
                <h3>Our Mens Items</h3>
            </div>
            <div className='product-head'>
                <h4>Check Out Stylish Mens shirts</h4>
            </div>
            <Row className='seventh'>
               <Slider {...settings}>
               {seventh.map((pu)=>(
                    <>
                        
                    <div className='seventh-item'>
                        <div className='overlay'>
                            <h4>{pu.title}</h4>
                            <p>Price: {pu.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={pu.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>



            <div className='product-head'>
                <h4>Check Out Stylish Men's shoes</h4>
            </div>
            <Row className='eighth'>
               <Slider {...settings}>
               {eighth.map((oo)=>(
                    <>
                        
                    <div className='eighth-item'>
                        <div className='overlay'>
                            <h4>{oo.title}</h4>
                            <p>Price: {oo.price} USD</p>
                            <a><FaCartArrowDown /></a>
                            <a><FaHeart /></a>
                        </div>
                        <img src={oo.thumbnail}></img>
                        </div>
                        
                    </>
                ))}
               </Slider>
            </Row>


        </Container>
    </section>
  )
}

export default Product