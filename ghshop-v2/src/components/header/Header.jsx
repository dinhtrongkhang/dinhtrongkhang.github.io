import React from "react";

import {
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Stack,
} from "react-bootstrap";
import { BsCart, BsPerson } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Container className="d-block">
                    <Row className="align-items-center">
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

                        <Col
                            lg={{ span: 6, order: 2 }}
                            className="d-none d-lg-block"
                        >
                            <Nav className="justify-content-center">
                                <Nav.Link as={NavLink} to="/">
                                    Trang chủ
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/about">
                                    Trẻ em
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products">
                                    Nữ
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products">
                                    Nam
                                </Nav.Link>
                                
                                <Nav.Link as={NavLink} to="/products">
                                    Tin tức
                                </Nav.Link>
                            </Nav>
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

                        <Col xs={{ span: 12, order: 4 }} className="d-lg-none">
                            <Navbar.Collapse id="main-nav">
                                <Nav>
                                    <Nav.Link as={NavLink} to="/">
                                        Home
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/about">
                                        About
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/products">
                                        Products
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
