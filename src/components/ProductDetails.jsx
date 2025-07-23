import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function ProductDetails({cartitems, handleAddToCart}) {
    const location = useLocation();
    const navigate = useNavigate();

    const { title, price, images, description, category, id } = location.state || {
    };
    const[otherProducts, setOtherProducts] = useState([]);

    useEffect(()=> {
        async function getdata() {
            const response= await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=10&offset=0`)
            setOtherProducts(response.data) 
        }
        getdata();
    },[])

    return (
        <div style={{padding:'40px'}}>
            <Row>
                <Col lg={2}>
                    <div className="divpro"  style={{display:'flex',flexDirection:'column'}}>
                        {images.map((image, index) => (
                            <img
                            className="Image"
                                key={index}
                                src={image}
                                width={90}
                                style={{ marginBottom: '20px' }}
                                alt={`product-image-${index}`}
                            />
                        ))}
                    </div>
                </Col>
                <Col lg={5}>
                    <div   style={{marginLeft:'-13%'}}>
                        <img
                        className="mainImg"
                            src={images[0] || ""}
                            width={280}
                            style={{ marginBottom: '20px' }}
                            alt="product-main-image"
                        />
                        <h2 className="title">{title}</h2>
                        <h3 className="price">${price}</h3>
                        <p className="info" style={{width:'100%'}}>{description.split(".")[0]}</p>
                        <Button className="cart" onClick={() => {
                        const currentCartItems = cartitems || {};

                        if (id in currentCartItems) {
                            const currentItem = currentCartItems[id];
                            handleAddToCart({
                            [id]: { title, price, quantity: currentItem.quantity + 1 }
                        });
                        } else {
                            handleAddToCart({
                             [id]: { title, price, quantity: 1 }
                             });
                         }
                  }}>
                          Add to cart
                        </Button>


                    </div>
                </Col>
                <Col className="similaruu" >
                <h2  className="similar">Other products under same category</h2>
                <div className="prosim" style={{ display: 'flex', flexWrap: 'wrap' }}>
                 {otherProducts.map((product) => {
                  if (product.id === id) return;

                  return (
                  <Card  key={product.id} style={{ width: '10rem', margin: '10px', border: 'none', boxShadow:'none' }}>
                  <Card.Img variant="top" src={product.images[0]} style={{ height: '10rem' }} />
                  <Card.Body>
                    <Card.Title>{product.title.split(" ")[1]}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button className="viewbtn" onClick={() => navigate(`/product/${product.id}`, { state: product })}>
                        View item
                    </Button>
                </Card.Body>
            </Card>
        );
    })}
</div>

                </Col>
            </Row>
        </div>
    );
}
