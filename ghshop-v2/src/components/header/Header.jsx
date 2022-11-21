import React from "react";
import styles from "./Header.module.css";

import {
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Stack,
    Form,
    Button
} from "react-bootstrap";
import { BsCart, BsPerson } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (
        <header className={styles.Header}>
            <Navbar expand="lg">
                <Container className="d-block">
                    <Row className="align-items-center justify-content-between">
                        <Col xs={{ span: 4, order: 1 }} className="d-lg-none">
                            <Navbar.Toggle aria-controls="main-nav" />
                        </Col>

                        <Col
                            xs={{ span: 4, order: 2 }}
                            lg={{ span: 3, order: 1 }}
                            className="text-center text-lg-start"
                        >
                            <Navbar.Brand as={Link} to="/">
                                GHSHOP
                            </Navbar.Brand>
                        </Col>

                        <Col xs={{ span: 4, order: 1 }} className="">
                            <Form>
                                <Stack direction="horizontal"
                                    gap={3}
                                    className="justify-content-end">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className=""
                                        aria-label="Search"
                                    />
                                    <Button className={styles.btnSearch}>Search</Button>
                                </Stack>
                            </Form>
                        </Col>

                        <Col xs={{ span: 4, order: 3 }} lg={{ span: 3 }}>
                            <Stack
                                direction="horizontal"
                                gap={3}
                                className="justify-content-end"
                            >
                                <Nav.Link as={Link} to="/cart">
                                    <BsCart />
                                </Nav.Link>

                                <NavDropdown title={<BsPerson />} align="end">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            lg={{ span: 12, order: 2 }}
                            className="d-none d-lg-block mt-2"
                        >
                            <Nav className="justify-content-center">
                                <Nav.Link as={NavLink} to="/" className={styles.navLink}>
                                    Trang chủ
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
                                    Trẻ em
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
                                    Nữ
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
                                    Nam
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
                                    Tin tức
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
