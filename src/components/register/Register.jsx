import React from 'react'
import "./register.css"
import { Col, Container, Row } from 'react-bootstrap'
import sign from "../../assets/sign-img.png"
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    
        <section className='register'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={6} className='sign-img'>
                    <img src={sign}></img>
                </Col>
                <Col lg={6} className='you'>
                    <form>
                    <input className="hello" placeholder='Name'></input>
                    <input className="hello" placeholder='Email or Phone Number'></input>
                    <input type='password' className="hello" placeholder='Password'></input>
                    <a className='btns'>Create Account</a>
                    <a className='btns2'><FcGoogle /> Sign up with Google</a>
                    <a className='btns3'>Already have account?
                    Log in</a>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
       
  )
}

export default Register