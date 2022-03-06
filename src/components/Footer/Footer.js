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
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  const creditStyle = {
    color: "#4a54f1",
    textAlign: "center",
    padding: 10
  };


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            {/*<h1 className="title">The Final Frontier</h1>*/}
          </Col>
          <Col md="3">

            <div style={creditStyle}>
              <h2 >Written By</h2>
                <h3>
                  <u><a href={"https://mhubs.github.io/"} target="_blank"  rel="noreferrer">Maxwell Hubbard</a></u>
                </h3>
            </div>
          </Col>
          <Col md="3">

            <div style={creditStyle}>
              <h2 >Website Template</h2>
              <h3>
                <u><a href={"https://www.creative-tim.com/templates/free"} target="_blank"  rel="noreferrer">Creative Tim</a></u>
              </h3>
            </div>
          </Col>
          <Col md="3">
            <div style={creditStyle}>
              {/*<h4 className="title">© 2022 All Rights Reserved.</h4>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
