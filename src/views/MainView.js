/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
} from "reactstrap";
import {Link} from "react-router-dom";

// sections for this page/view


export default function MainView(props) {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("profile-page");
            document.body.classList.toggle("index-page");
        };
    },[]);

    return (
        <>
            <IndexNavbar  name={props.name}/>
            <div className="">
                <PageHeader scroll={"Explore"}/>
                <div className="wrapper" >
                    <div className="page-header">
                        <img
                            alt="..."
                            className="dots"
                            src={require("../assets/img/dots.png").default}
                        />
                        <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/path4.png").default}
                        />
                        <Container className="align-items-center" id={"ScrollTo"}>
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">What are we?</h1>
                                    <h5 className="text-on-back">01</h5>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="6" md="6" >
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Final Frontier #118"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={require("../assets/img/Planet_118.png").default}
                                            />
                                            <h4 className="title">
                                                We are a series of 500 unique NFTs minted on the Polygon blockchain to support
                                                cleaner usages in the crypto community. The love of outer space helps us continue
                                                our search for new planets.
                                            </h4>
                                        </CardHeader>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Final Frontier #433"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={require("../assets/img/Planet_433.png").default}
                                            />
                                            <h4 className="title">
                                                Our creator, moomaxie, spends his time designing art and applications to
                                                support outer space research and exploration and teach of its importance.
                                            </h4>
                                        </CardHeader>

                                    </Card>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">Support An Indie Artist and Programmer</h1>
                                    <h5 className="text-on-back">02</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <section className="section">
                        <Container>
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">Why?</h1>
                                    <h5 className="text-on-back">03</h5>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="6" md="6" >
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Final Frontier #500"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={require("../assets/img/Planet_500.png").default}
                                            />
                                            <h4 className="title">
                                                Humankind was meant to explore and discover all there is in the universe.
                                                Will we ever discover planets like these? Time will tell…
                                            </h4>
                                        </CardHeader>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
}
