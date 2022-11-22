import React from "react";
import styles from "./Home.module.css";
import { Container, Row, Col, Card, Ratio, Button } from "react-bootstrap";
import Banner from "./Banner";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



const Home = () => {

    const swiperProps = {
        modules: [Navigation, Pagination],
        spaceBetween: 24,
        slidesPerView: 4,
        navigation: true,
    };

    return (
        <main>
            <Banner />

            <Container className="mb-5">
                <Row className="gy-2">
                    <Col xs={6} md={6} lg={6} xl={6} className="mt-5">
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-baby-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                            <Container className={styles.wrapTitle}>
                                <h3>Trẻ Em</h3>
                                <Button className={styles.btn}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={6} md={6} lg={6} xl={6} className="mt-5">
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-women-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                            <Container className={styles.wrapTitle}>
                                <h3>Thời Trang Nữ</h3>
                                <Button className={styles.btn}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row className="gy-2 mt-5">
                    <Col xs={6} md={6} lg={6} xl={6} className="mt-5">
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-jacket-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                            <Container className={styles.wrapTitle}>
                                <h3>Áo Khoác</h3>
                                <Button className={styles.btn}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={6} md={6} lg={6} xl={6} className="mt-5">
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-men-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                            <Container className={styles.wrapTitle}>
                                <h3>Thời Trang Nam</h3>
                                <Button className={styles.btn}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container >

            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </main >
    );
};


export default Home;
