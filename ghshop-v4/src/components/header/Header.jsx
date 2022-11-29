import React from "react";
import styles from "./Header.module.css";

import {
    Badge,
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Stack,
    Form
} from "react-bootstrap";
import { BsCart, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectTotalCartItem } from "../../store/features/cart/cart.slice";
import LoginForm from "../login-form/LoginForm";

const Header = () => {
    const totalItem = useSelector(selectTotalCartItem);

    return (
        <header className={styles.Header}>
            <Navbar expand="lg">
                <Container className="d-block">
                    <Row className="align-items-center justify-content-between">
                        <Col xs={{ span: 4, order: 1 }} className="d-lg-none">
                            <Navbar.Toggle aria-controls="main-nav" />
                        </Col>

                        <Col xs={{ span: 4, order: 1 }} lg={{ span: 3, order: 1 }} className="text-center text-lg-start"
                        >
                            <Navbar.Brand as={Link} to="/">
                                GHSHOP
                            </Navbar.Brand>
                        </Col>

                        <Col xs={{ span: 4, order: 1 }} className="d-none d-lg-block">
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
                                    <Button className={styles.btn}>Search</Button>
                                </Stack>
                            </Form>
                        </Col>

                        <Col xs={{ span: 4, order: 1 }} lg={{ span: 3 }}>
                            <Stack
                                direction="horizontal"
                                gap={3}
                                className="justify-content-end"
                            >
                                <Nav.Link as={Link} to="/cart" className={styles.cart}>
                                    <BsCart />

                                    <Badge className={styles.totalItem}>{totalItem}</Badge>
                                </Nav.Link>

                                {/* <NavDropdown title={<BsPerson />} align="end">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown> */}
                                <LoginForm />

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
                    <Row className="justify-content-center">
                        <Col
                            lg={{ span: 6, order: 2 }}
                            className="d-none d-lg-block"
                        >
                            <Nav className="justify-content-center">
                                <Nav.Link as={NavLink} to="/" className={styles.navLink}>
                                    Home
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
                                    About
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
                                    Products
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
