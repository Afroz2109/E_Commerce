import { Row, Col, Button, Form } from "react-bootstrap"
import { useState } from "react"
import LoginImg from '../assets/Login.png'
import { useNavigate } from "react-router-dom";


export default function Login({setUser}) {
    const [email, setEmail]= useState('');
    const navigate= useNavigate();
    return (        
        <div className="signup" style={{backgroundColor:'#61c4f9',width:'100%',height:'100vh',marginLeft:'0.5%'}}>
            <Row>
                <Col style={{padding:'100px'}}>
                <div className="loginPart">
                    <h1 style={{color:'purple',textAlign:'center'}}>InStA BuY</h1>
                    <h5 style={{color:'royalblue',width:'100%'}}>One Place for all your needs and Shop from the latest trendy clothes to the best gadgets</h5>
                    <Form >
                        <h5>No need to have an account Enter your mail and create password and Login securely</h5>
                        <div className="form" style={{width:'85%',marginTop:'4%',margin:'10px',}}>
                        <Form.Group  controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.currentTarget.value)}/> 
                       </Form.Group>
                       <Form.Group  controlId="formBasicPassword">
                         <Form.Control type="password" placeholder="Password" />
                       </Form.Group>
                    </div>
                    <Button
                    className="loginbtn"
                    onClick={() => {
                    const userEmail = email.trim();
                    if (userEmail) {
                    localStorage.setItem('userEmail', userEmail);
                    setUser(userEmail);
                    navigate('/'); 
                  } else {
                     alert('Please enter a valid email.');
                    }
                  }}
                  style={{
                  marginLeft: '12%',
                  width: '55%',
                  borderColor: 'white',
                   marginBottom: '15px'
                  }}
                 type="button"
                 >
                Start Shopping
                </Button>
                    </Form>
                </div>
                </Col>
                <Col className="loginImg">
                <img style={{height:'60vh',marginTop:'9%',marginLeft:'-29%',width:'110vh'}} src={LoginImg} alt="" />
                </Col>
            </Row>
        </div>
    )
}
