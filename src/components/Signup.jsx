import { Row, Col, Button, Form } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupImg from '../assets/signup.png'

export default function Signup({setUser}) {
    const [email, setEmail]= useState('');
    const navigate= useNavigate();
    return (
        <div className="signup" style={{backgroundColor:'#61c4f9'}}>
            <Row>
                <Col style={{padding:'100px',height:'100vh'}}>
                <div className="loginPart">
                    <h1 style={{color:'purple'}}>InStA BuY</h1>
                    <h5 style={{color:'white',width:'100%'}}>One Place for all your needs and Shop from the latest trendy clothes to the best gadgets</h5>
                    <Form >
                        <div className="form" style={{width:'85%',marginTop:'4%'}}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Control type="text" placeholder="Enter Full Name" /> 
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Control type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.currentTarget.value)} /> 
                           </Form.Group>
                           <Form.Group  className="mb-3" controlId="formBasicPassword">
                           <Form.Control type="password" placeholder="Create Password" />
                           </Form.Group>
                        </div>
                    <Button className="loginbtn"  onClick={() => {
                      localStorage.setItem('userEmail', email);
                      navigate('/');
          }} style={{marginLeft:'12%',width:'55%',borderColor:'white',marginBottom:'15px'}} variant="primary" type="submit">
                            Start Shopping
                     </Button> 
                     <div className="joinClubs" style={{color:'white',width:'100%', textAlign:'center'}}>
                        Already have an account? <a style={{color:'blue',textDecoration:'none'}} href="/login"> Click here to Login</a>
                     </div>
                    </Form>
                </div>
                </Col>
                <Col className="signupImg">
                <img style={{height:'60vh',marginTop:'9%',marginLeft:'-20%',width:'110vh'}} src={SignupImg} alt="" />
                </Col>
            </Row>
        </div>
    )
}