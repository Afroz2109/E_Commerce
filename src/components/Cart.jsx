import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import cartImg from '../assets/cartImg.webp'
import { useNavigate } from "react-router-dom";


export default function Cart({cartItems}) {
    const [totalPrice, setTotalPrice]= useState(0);
    const [totalQuantity, setTotalQuantity]= useState(0);
    const navigate= useNavigate();

    useEffect(()=> {
        let tempPrice= 0;
        let tempQuantity= 0;
        Object.keys(cartItems).map((cartItemid)=> {
            const details = cartItems[cartItemid];
            tempPrice += details.price * details.quantity;
            tempQuantity += details.quantity;
        })
        setTotalPrice(tempPrice);
        setTotalQuantity(totalQuantity)
    })
    return (
        <div className="carti" >
            <Row>
                <Col>
                   <h3 style={{padding:'10px'}}>Your Cart</h3>
                   <Table style={{marginTop:'390',marginLeft:'6%'}}>
                      <thead>
                          <tr>
                            <th>Product</th>  
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(cartItems).map((cartItemid)=> {
                            const details = cartItems[cartItemid];
                            return (
                                <tr key={cartItemid}>
                                     <td>{details.title}</td>
                                     <td>{details.quantity}</td>
                                     <td>{details.price * details.quantity}</td>
                                </tr>

                                    )
                                })}
                                <tr>
                                    <td>Total</td>
                                    <td>{totalQuantity}</td>
                                    <td>{totalPrice}</td>
                                </tr>
                      </tbody>
                   </Table>
                   <Button style={{marginLeft:'6%'}} onClick={()=> navigate('/checkout')}>Checkout</Button>
                </Col>
                <Col>
                <img className="cartImage" src={cartImg} alt="cart" height={450} style={{marginTop:'9%',marginLeft:'13%'}} />
                </Col>
            </Row>

        </div>
    )
}