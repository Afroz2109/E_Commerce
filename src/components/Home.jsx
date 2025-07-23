import { Button, Carousel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselOneImg from '../assets/displayOne.avif'
import CarouselTwoImg from '../assets/display1.png'
import CarouselThreeImg from '../assets/display2.jpeg'
import CarouselFourImg from '../assets/product3.jpeg'

import CompanyLogoOne from '../assets/allensolly.png'
import CompanyLogoTwo from '../assets/rarerabbit.jpeg'
import CompanyLogoThree from '../assets/zara.jpg'
import CompanyLogoFour from '../assets/levis.png'
import CompanyLogoFive from '../assets/roadstar.png'
import { useNavigate, useNavigation } from "react-router-dom";



const Home = ({user}) => {
  const navigate = useNavigate(); 
  const handleCTAClick = () => {
    if (user) {
      navigate('/products'); 
    } else {
      navigate('/login'); 
    }
  }
    return (
      <div>
        <Carousel className="HomeContainer">
          <Carousel.Item>
            <Row>
              <Col>
                <div className="texts">
                  <h2 style={{fontWeight:'700',fontSize:'2.5rem'}}>SHOP WITH UTMOST</h2>
                  <h2 style={{fontWeight:'700',color:'royalblue',fontSize:'2.5rem'}}><i>STYLE</i></h2>
                  <h6>Style that grabs the spotlight Shop from the latest trendy clothes to the best gadgets</h6>
                </div>
                <div>
                <Button className="browse-button" onClick={handleCTAClick}>Browse Products</Button>
                </div>
                <div className="Company">
                  <h4 className="product">Products Available From:</h4>
                  <img className="CompanyLogo" src={CompanyLogoOne} alt="" />
                  <img className="CompanyLogo" src={CompanyLogoTwo} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoThree} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFour} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFive} alt="" />
                </div>
              </Col>
              <Col>
                <img className="homeScreen" src={CarouselOneImg} alt="Carousel One" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="texts">
                  <h2 style={{fontWeight:'700',fontSize:'2.5rem'}}>SHOP WITH UTMOST</h2>
                  <h2 style={{fontWeight:'700',color:'royalblue',fontSize:'2.5rem'}}><i>STYLE</i></h2>
                  <h6>Style that grabs the spotlight Shop from the latest trendy clothes to the best gadgets</h6>
                </div>
                <div>
                <Button className="browse-button" onClick={handleCTAClick}>Browse Products</Button>
                </div>
                <div className="Company">
                  <h4 className="product">Products Available From:</h4>
                  <img className="CompanyLogo" src={CompanyLogoOne} alt="" />
                  <img className="CompanyLogo" src={CompanyLogoTwo} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoThree} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFour} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFive} alt="" />
                </div>
              </Col>
              <Col>
                <img className="homeScreen" src={CarouselTwoImg} alt="Carousel Two" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="texts">
                  <h2 style={{fontWeight:'700',fontSize:'2.5rem'}}>SHOP WITH UTMOST</h2>
                  <h2 style={{fontWeight:'700',color:'royalblue',fontSize:'2.5rem'}}><i>STYLE</i></h2>
                  <h6>Style that grabs the spotlight Shop from the latest trendy clothes to the best gadgets</h6>
                </div>
                <div>
                <Button className="browse-button" onClick={handleCTAClick}>Browse Products</Button>
                </div>
                <div className="Company">
                  <h4 className="product">Products Available From:</h4>
                  <img className="CompanyLogo" src={CompanyLogoOne} alt="" />
                  <img className="CompanyLogo" src={CompanyLogoTwo} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoThree} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFour} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFive} alt="" />
                </div>
              </Col>
              <Col>
                <img className="homeScreen" src={CarouselThreeImg} alt="Carousel Three" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="texts">
                  <h2 style={{fontWeight:'700',fontSize:'2.5rem'}}>SHOP WITH UTMOST</h2>
                  <h2 style={{fontWeight:'700',color:'royalblue',fontSize:'2.5rem'}}><i>STYLE</i></h2>
                  <h6>Style that grabs the spotlight Shop from the latest trendy clothes to the best gadgets</h6>
                </div>
                <div >
                <Button className="browse-button" onClick={handleCTAClick}>Browse Products</Button>
                </div>
                <div className="Company">
                  <h4 className="product">Products Available From:</h4>
                  <img className="CompanyLogo" src={CompanyLogoOne} alt="" />
                  <img className="CompanyLogo" src={CompanyLogoTwo} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoThree} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFour} alt="" />
                  <img className="CompanyLogo"  src={CompanyLogoFive} alt="" />
                </div>
              </Col>
              <Col>
                <img className="homeScreen" src={CarouselFourImg} alt="Carousel Four" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default Home;