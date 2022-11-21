import React from "react";
import styles from "./Home.module.css";
import { Card, Col, Container, Row, Ratio, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper";


const Home = () => {
    const products = useLoaderData();

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
                <Row className="gy-2 mb-5">
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
                                <Button className={styles.btnProduct}>Mua Ngay</Button>
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
                                <Button className={styles.btnProduct}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row className="gy-2">
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
                                <Button className={styles.btnProduct}>Mua Ngay</Button>
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
                                <Button className={styles.btnProduct}>Mua Ngay</Button>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container >

            <Container>
                <Row>
                    <Swiper {...swiperProps}>

                    </Swiper>
                </Row>
            </Container>
        </main >
    );
};

Home.loader = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        return products;
    } catch (err) {
        throw new Error("Không lấy được danh sách sản phẩm");
    }
};

export default Home;
