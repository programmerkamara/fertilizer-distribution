import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Home1 from './images/Home.jpg';
import image2 from './images/bg2.jpg';
import image3 from './images/bg3.jpg';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Home1}
                            alt="First slide"
                        />
                        <Carousel.Caption style={{top: '0', left: '50%', transform: 'translate(-50%, 0)', width: '100%', textAlign: 'center'}}>
                            <h2 className="text-success"><b>Welcome to the Agriculture Store and Inventory System</b></h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                        <Carousel.Caption style={{top: '0', left: '50%', transform: 'translate(-50%, 0)', width: '100%', textAlign: 'center'}}>
                            <h2 className="text-success">Welcome to the Agriculture Store and Inventory System</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{top: '0', left: '50%', transform: 'translate(-50%, 0)', width: '100%', textAlign: 'center'}}>
                            <h2 className="text-success">Welcome to the Agriculture Store and Inventory System</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
