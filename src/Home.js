import { useState } from 'react';
import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import Card from './Card';
import Box from './Box';
import 'antd/dist/antd.css'
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const style = {
    height: 50,
    width: 50,
    lineHeight: '40px',
    borderRadius: '50%',
    backgroundColor: '#CD2A55',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
};
function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const arr = [
        {
            imgsrc: require('./images/1.jpg'),
            title: "360 Litres ConvertiblePLUS Fridge with Inverter Linear Compressor, Door Cooling+™,",
            installment: "₹3,505/ mo for 12 mos at 16% or",
            price: "₹41490",
            del: "₹63599",
            off: "34% Off  ",
            member: 'LG Members only ',
            member_price: "₹40660"
        },
        {
            imgsrc: require('./images/GL-I292RPZX-Refrigerators-Front-View-350.jpg'),
            title: "260 Litres Frost Free Refrigerator With Smart Inverter Compressor, Smart Diagnosis™, Auto Smart",
            installment: "₹2,280/ mo for 12 mos at 16% or",
            price: "₹26990",
            del: "₹35699",
            off: "24% Off",
            member: 'LG Members only ',
            member_price: "₹26450"
        },
        {
            imgsrc: require('./images/GL-B201ASPY_Thumb_350.jpg'),
            title: "190 L, Smart Inverter Compressor",
            installment: "₹1,350/ mo for 12 mos at 16% or",
            price: "₹15990",
            del: "₹22799",
            off: "29% Off",
            member: 'LG Members only ',
            member_price: "₹15670"
        },
        {
            imgsrc: require('./images/FHM1409BDP-Washing-Machines-Thumb-350.jpg'),
            title: "LG 9.0 kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1409BDP,",
            installment: "₹2,387/ mo for 18 mos at 16% or",
            price: "₹37990",
            del: "₹56990",
            off: "33% Off",
            member: 'LG Members only ',
            member_price: "₹37230"
        },
        {
            imgsrc: require('./images/T65SKSF4Z-Washing-Machines-Front-View-350.jpg'),
            title: "LG 6.5 kg 5 Star Inverter Fully Automatic Top Load Washing Machine Silver  (T65SKSF4Z)",
            installment: "₹1,939/ mo for 10 mos at 15% or",
            price: "₹18990",
            del: "₹24990",
            off: "24% Off",
            member: 'LG Members only ',
            member_price: "₹18610"
        },
        {
            imgsrc: require('./images/P7525SPAZ-Washing-Machines-Front-View-350-V1.jpg'),
            title: "LG 7.5 kg 5 Star Semi-Automatic Top Loading Washing Machine (P7525SPAZ, Purple, Roller Jet",
            installment: "₹785/ mo for 18 mos at 16% or",
            price: "₹12490",
            del: "₹16490",
            off: "24% Off",
            member: 'LG Members only ',
            member_price: "₹12240"
        },
        {
            imgsrc: require('./images/WW182EP-Water-purifiers-Front-View-350.jpg'),
            title: "LG WW182EP 8 L RO + UV + UF Water Purifier with Stainless Steel Tank",
            installment: "₹2,365/ mo for 12 mos at 16% or",
            price: "₹27999",
            del: "₹36499",
            off: "23% Off",
            member: 'LG Members only ',
            member_price: "₹27439"
        },
        {
            imgsrc: require('./images/WW172EP-Water-purifiers-Front-View-350.jpg'),
            title: "LG WW172EP 8 L RO + UV Water Purifier with Stainless Steel Tank",
            installment: "₹2,154/ mo for 12 mos at 16% or",
            price: "₹25500",
            del: "₹32499",
            off: "21% Off",
            member: 'LG Members only ',
            member_price: "₹24990"
        },
        {
            imgsrc: require('./images/PS-Q19YNZE-350.jpg'),
            title: "AI Convertible 6-in-1, 5 Star (1.5) with Anti Virus Protection",
            installment: "₹2,935/ mo for 18 mos at 16% or",
            price: "₹46700",
            del: "₹75990",
            off: "38% Off",
            member: 'LG Members only ',
            member_price: "₹45765"
        },
        {
            imgsrc: require('./images/PS-Q19YNZE-350.jpg'),
            title: "Super Convertible 5-in-1, 3 Star (1.0) with Anti Virus Protection",
            installment: "₹2,275/ mo for 18 mos at 16% or",
            price: "₹36198",
            del: "₹57990",
            off: "37% Off",
            member: 'LG Members only ',
            member_price: "₹35475"
        },
        {
            imgsrc: require('./images/PS-Q19YNZE-350.jpg'),
            title: "AI Convertible 6-in-1, 5 Star (1.0) Split AC with Anti Virus Protection",
            installment: "₹2,476/ mo for 18 mos at 16% or",
            price: "₹39398",
            del: "₹61990",
            off: "36% Off",
            member: 'LG Members only ',
            member_price: "₹38611"
        },
        {
            imgsrc: require('./images/PS-Q19YNZE-350.jpg'),
            title: "Super Convertible 5-in-1, 3 Star (1.5) with Anti Virus Protection",
            installment: "₹2,476/ mo for 18 mos at 16% or",
            price: "₹39398",
            del: "₹68990",
            off: "42% Off",
            member: 'LG Members only ',
            member_price: "₹38611"
        }
    ]

    const arr2 = [
        {
            img: require('./images/PS-Q19YNZE-350.jpg'),
            Name: "AIR CONDITIONERS"
        },
        {
            img: require('./images/MC2886BHT-Microwave-ovens-Front-view-with-logo-350.jpg'),
            Name: "MICROWAVE OVEN"
        },
        {
            img: require('./images/md07537516-350x350.jpg'),
            Name: "REFRIGERATOR"
        },
        {
            img: require('./images/FHV1207BWP-Washing-Machines-Front-View-350.jpg'),
            Name: "WASHING MACHINES"
        },
    ]
    const arr3 = [
        {
            img: require('./images/75QNED95VPA-350.jpg'),
            Name: "OLED"
        },
        {
            img: require('./images/86QNED99TPZ-350.jpg'),
            Name: "QNED"
        },
        {
            img: require('./images/43NANO79TND-350.jpg'),
            Name: "NANOCELL"
        },
        {
            img: require('./images/43UP7550PTZ-350.jpg'),
            Name: "UHD"
        },
    ]
    const arr4 = [
        {
            img: require('./images/16Z90P-G-AJ54A2-350.jpg'),
            Name: "LG GRAM"
        },
        {
            img: require('./images/27QN600-B-Thumb-350.jpg'),
            Name: "MONITORS"
        },
        {
            img: require('./images/27HJ713C-B-350.jpg'),
            Name: "MEDICAL MONITORS"
        },
        {
            img: require('./images/HU810PW-350.jpg'),
            Name: "PROJECTORS"
        },
    ]
    // const [user, setuser] = useState();


    return (
        <>
            <div
                style={{
                    height: '1035vh',
                    padding: 8,
                }}
            >
                <Row className='container header' >
                    <Col xxl={1} xl={1} lg={1} md={1} className="logo"><img src={require('./images/logo.jpg')} /></Col>
                    <Col xxl={11} xl={11} lg={11} md={11}>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} className="logo1" >
                                <img src={require('./images/lg-signature-logo.jpg')} />
                                <a>For Business</a>
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} className="menu1">
                                <p></p>
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Row className='menu'>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={10} xs={10}>
                                        <Navbar expand="md">
                                            <Container fluid>
                                                <Navbar.Toggle aria-controls="navbarScroll" />
                                                <Navbar.Collapse id="navbarScroll">
                                                    <Nav
                                                        className="me-auto my-2 my-lg-0"
                                                        style={{ maxHeight: '200px' }}
                                                        navbarScroll
                                                    >
                                                        <Nav.Link href="#action1">TV/AUDIO
                                                            <Row className='main_menu d-flex'>
                                                                <Col xxl={3} xl={3} lg={3} md={3} className="TV mb-4">
                                                                    <h3>TV/AUDIO<i className="fa-solid fa-angle-right"></i></h3>
                                                                    <h6>TVS</h6>
                                                                    <p>Rollable OLED TV</p>
                                                                    <p>OLED TVs</p>
                                                                    <p>QNED MiniLED TVs</p>
                                                                    <p>NanoCell TVs</p>
                                                                    <p>UHD 4K TVs</p>
                                                                    <p>SMART TVs</p>
                                                                    <p>LED TVs</p>
                                                                    <p>Ultra Large TVs</p>
                                                                    <h6>TV ACCESSORIES</h6>
                                                                    <h6>PREMIUM CARE & AMC</h6>
                                                                </Col>
                                                                <Col xxl={3} xl={3} lg={3} md={3} className="TV">
                                                                    <h6>AUDIO</h6>
                                                                    <p>Wireless Earbuds</p>
                                                                    <p>Active Noise Cancelling Earbuds</p>
                                                                    <p>UV Earbuds</p>
                                                                    <p>Sound Bars</p>
                                                                    <p>Wireless Speaker</p>
                                                                    <p>Multi Media Speaker</p>
                                                                    <p>Party Speaker</p>
                                                                    <h6>PROJECTORS</h6>
                                                                </Col>
                                                                <Col xxl={3} xl={3} lg={3} md={3} align="center" className="slider_img">
                                                                    <img src={require('./images/in_gnb_obs.jpg')} />
                                                                    <h6 className='mt-2'>Explore Offers</h6>
                                                                </Col>
                                                                <Col xxl={3} xl={3} lg={3} md={3} className="header_Slider">
                                                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                                                        <Carousel.Item align="center">
                                                                            <img
                                                                                className="d-block"
                                                                                src={require('./images/oled-GlobalNavThumbnail-6-14-21_flagship OLED.jpg')} width={160}
                                                                                alt="First slide"

                                                                            />
                                                                            <h6 align="center" className='mt-2 mx-4'>The Flagship OLED TV</h6>
                                                                            <p align="center" className='mb-5 fs-6 fw-light mx-4'>Incredible picture quality framed as a work of art</p>
                                                                        </Carousel.Item>

                                                                        <Carousel.Item align="center">
                                                                            <img
                                                                                className="d-block"
                                                                                src={require("./images/lg_hbs_fn7_black.jpg")} width={160} height={160}
                                                                                alt="Second slide"
                                                                            />
                                                                            <h6 align="center" className='mt-2 mx-4'>LG Tone Free Wireless Earbuds</h6>
                                                                            <p align="center" className='mb-5 fs-6 fw-light mx-4'>Explore Now</p>

                                                                        </Carousel.Item>
                                                                        <Carousel.Item align="center">
                                                                            <img
                                                                                className="d-block"
                                                                                src={require("./images/6-22-21-GNBTile2_rollable OLED.jpg")} width={160}
                                                                                alt="Third slide"
                                                                            />
                                                                            <h6 align="center" className='mt-2 mx-4'>LG SIGNATURE Rollable OLED TV</h6>
                                                                            <p align="center" className='mb-5 fs-6 fw-light mx-4'>The world’s first and only rollable TV has arrived.</p>


                                                                        </Carousel.Item>
                                                                    </Carousel>
                                                                </Col>
                                                            </Row>

                                                        </Nav.Link>
                                                        <Nav.Link href="#action2">Appliances</Nav.Link>
                                                        <Nav.Link href="#action2">Computers</Nav.Link>
                                                        <Nav.Link href="#action2">Support</Nav.Link>

                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                    </Col>
                                    <Col className='menu_icon' xxl={4} xl={4} lg={4} md={4} sm={2} xs={2}>
                                        <i className="fa-solid fa-address-book"></i>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* ---------------------------------------------------------------------------------------------------------------
                                                    Slider
----------------------------------------------------------------------------------------------------------------*/}

                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./images/OLED-BANNER-DESKTOP-NEW.jpg')}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./images/Ref Banner_D_3-11Rev.jpg')}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./images/HERO Banner(PC)_Care for where you live-01.jpg')}
                            alt="Third slide"
                        />
                        <Row>
                            <Col className='slider'>
                                <h1>Care For Where You Live</h1>
                                <p>What happens after changing the AC temperature?<br></br>Tips to reduce carbon emissions are hiding<br></br>in things we already do, even by chance.</p>
                                <button>find out more</button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>



                <Row className="mt-5 container">
                    <Col className="info" lg={4} md={4} sm={12}>
                        <a href="#"><img src={require("./images/AC-Creative.jpg")} /></a>
                    </Col>
                    <Col className="info" lg={4} md={4} sm={12}>
                        <a href="#"><img src={require("./images/Oled-Shahrukh.png")} /></a>
                    </Col>
                    <Col className="info" lg={4} md={4} sm={12}>
                        <a href="#"><img src={require("./images/ultra-gear-768x576.jpg")} /></a>
                    </Col>
                </Row>
                {/* -------------------------------------------------------------------------------------------------------------
                                                Hot & Trending Products
---------------------------------------------------------------------------------------------------------------- */}
                <div>
                    <Col className='mt-5' align="center" lg={12} md={12} sm={12}><h1>Hot & Trending Products</h1></Col>
                </div>
                <div className='d-flex Trending_Products'>
                    {
                        arr.map((val, i) => {
                            return (
                                <Card key={i} imgsrc={val.imgsrc}
                                    title={val.title}
                                    installment={val.installment}
                                    price={val.price}
                                    del={val.del}
                                    off={val.off}
                                    member={val.member}
                                    member_price={val.member_price} />
                            );
                        })
                    }
                </div>
                <div>
                    <Col className='mb-5' align="center" lg={12} md={12} sm={12}><h1>The Best LG Technologies</h1></Col>
                </div>
                <div className='banner'>
                    <img src={require('./images/HA-Banner-1600x400-2.jpg')} ></img>
                </div>
                <div style={{ background: "linear-gradient(-180deg,#fff 5%,#f2f2f2 50%,#fff 95%)" }}>
                    <div className='d-flex Box'>
                        {
                            arr2.map((lg, i) => {
                                return (
                                    <Box key={i} img={lg.img} Name={lg.Name} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className='banner'>
                    <img src={require('./images/OLED-Banner-1600x4002.jpg')} ></img>
                </div>
                <div style={{ background: "linear-gradient(-180deg,#fff 5%,#f2f2f2 50%,#fff 95%)" }}>
                    <div className='d-flex Box'>
                        {
                            arr3.map((lg, i) => {
                                return (
                                    <Box key={i} img={lg.img} Name={lg.Name} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className='banner'>
                    <img src={require('./images/lg-gram-1600x400.jpg')} ></img>
                </div>
                <div style={{ background: "linear-gradient(-180deg,#fff 5%,#f2f2f2 50%,#fff 95%)" }}>
                    <div className='d-flex Box'>
                        {
                            arr4.map((lg, i) => {
                                return (
                                    <Box key={i} img={lg.img} Name={lg.Name} />
                                );
                            })
                        }
                    </div>
                </div>
                <Row className="container mb-5" align="center">
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} className="instraction">
                        <img src={require('./images/LG-Certified-Installation.jpg')} />
                        <h2>LG Certified Installation</h2>
                        <p>Once you place order on LG.com your installation request will be generated post-delivery and our expert engineers will guide you through user manual</p>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} className="instraction">
                        <img src={require('./images/02-Secure-Payments.jpg')} />
                        <h2>Secure Payments</h2>
                        <p>Your Data security & privacy is our priority. Pay securely through 128 bit encrypted payment gateway. We support credit cards, net banking and debits cards.</p>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} className="instraction">
                        <img src={require('./images/03-Exclusive-Offers.jpg')} />
                        <h2>Exclusive Offers</h2>
                        <p>Now enjoy the benefits of LG exclusive offers. Subscribe LG.com to remain updated on latest offers</p>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12} xs={12} className="instraction">
                        <img src={require('./images/01-Free-Shoping-v1.jpg')} />
                        <h2>Free Shipping</h2>
                        <p>Avail Free & Safe shipping in serviceable pin codes, whenever you shop from https://www.lg.com/in We take pride in delivering most of our orders on priority</p>
                    </Col>
                </Row>

                <Row align="center" className='LG_promotions'>
                    <Col lg={12}><h2>Discover LG promotions</h2></Col>
                    <Col lg={12}><button>CLICK HERE</button></Col>
                </Row>

                <Row className="promotions">
                    <Col lg={4} md={4} sm={12} className="promotions_info">
                        <img src={require('./images/REF-Alpha4-Hygiene-Fresh-USP-M.jpg')} />
                        <h1>99.999%* Fresh Air</h1>
                        <h6>KNOW MORE<i className="fa-solid fa-angle-right"></i></h6>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="promotions_info">
                        <img src={require('./images/OLED-Circle-768x512.jpg')} />
                        <h1>Buy LG OLED TV, be a part of premium OLED Circle</h1>
                        <h6>KNOW MORE<i className="fa-solid fa-angle-right"></i></h6>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="promotions_info">
                        <img src={require('./images/projector-768x512.jpg')} />
                        <h1>Real 4K UHD Laser projector</h1>
                        <h6>KNOW MORE<i className="fa-solid fa-angle-right"></i></h6>
                    </Col>
                </Row>

                <Row>
                    <Col className="my-5" lg={12} md={12} sm={12} align="center">
                        <h1>Life’s Good! Social Feed</h1>
                    </Col>
                    <Col>

                        <main id="carousel">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </main>
                        <div className="caro">
                            <input type="radio" name="position" checked />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                            <input type="radio" name="position" />
                        </div>
                    </Col>
                </Row>

                <Row className='my-5 container' align="center">
                    <Col lg={12} md={12} sm={12} className='product_Service mb-5'>
                        <h2>LG Product Service and Support</h2>
                        <p>Get your questions answered about product setup, use and care,<br></br>
                            repair and maintenance issues. We can help.</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="support">
                        <img src={require('./images/in-b2b-home-iconlink-5.jpg')} />
                        <h2>Send an Email</h2>
                        <p>Send a Message to LG Customer Support</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="support">
                        <img src={require('./images/in-common-iconlink-4.jpg')} />
                        <h2>Whatsapp</h2>
                        <p>9711709999
                            24 hrs (7 days a week)
                            Except national holidays
                            Click to Connect on WhatsApp
                            Phone
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="support">
                        <img src={require('./images/in-common-iconlink-5.jpg')} />
                        <h2>Phone</h2>
                        <p>Call LG Support
                            1800 315 9999
                            OR
                            1800 180 9999
                            24 hrs (7 days a week)
                            Except national holidays</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="support">
                        <img src={require('./images/in-common-iconlink-3.jpg')} />
                        <h2>Address</h2>
                        <p>LG Electronics India Pvt. Ltd,
                            A-24/6,
                            Mohan Cooperative Industrial Estate,
                            Mathura Road,
                            New Delhi - 110044</p>
                    </Col>
                </Row>
            </div>
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>

        </>
    );
}
export default Home;