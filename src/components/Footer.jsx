import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MailForm } from "./MailForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/download.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Router>
        <Container>
          <Row className="align-items-center">
            <MailForm />
            <Col size={12} sm={6}>
              <HashLink to="#">
                <img src={logo} alt="Logo" />
              </HashLink>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yehor-boichenko-0659561aa/">
                  <img src={navIcon1} alt="navigation" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100006381033379">
                  <img src={navIcon2} alt="navigation" />
                </a>
                <a href="https://github.com/YehorBoichenko">
                  <img src={navIcon3} alt="navigation" />
                </a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Router>
    </footer>
  );
};
