import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

import styles from "../footer/Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="justify-content-betwen" className={styles.footerTop}>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <p className={styles.copyRight}>Bản quyền thuộc về GHSHOP</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
