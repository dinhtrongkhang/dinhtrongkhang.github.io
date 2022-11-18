import React from "react";
import { Card, Col, Container, Row, Image, Ratio } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} onClick={onClick} {...style}>
            <BsArrowRightCircleFill color="black" fontSize={24} />
        </div>
    );
};

const Home = () => {
    const products = useLoaderData();

    const slickConfig = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <NextArrow />,
    };

    return (
        <main>
            <Banner />

            <Container>
                <Row className="gy-2">
                    {products.map((product) => (
                        <Col key={product.id} xs={6} md={4} lg={3} xl={2} className="mt-5">
                            <Card>
                                <Ratio aspectRatio="1x1">
                                    <Card.Img
                                        // as={Image}
                                        // thumbnail={true}
                                        // variant="top"
                                        src="/banner-1.webp"
                                        style={{ objectFit: "contain" }}
                                    />
                                </Ratio>

                                <Card.Body>
                                    <Card.Title
                                        as={Link}
                                        to={`/products/${product.id}`}
                                    >
                                        {product.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row className="gy-4">
                    <Slider {...slickConfig}>
                        {products.map((product) => (
                            <Col key={product.id} xs={6} md={4} lg={3} xl={2} className="m-5 p-2">
                                <Card>
                                    <Ratio aspectRatio="1x1">
                                        <Card.Img
                                            as={Image}
                                            thumbnail={true}
                                            variant="top"
                                            src={product.image}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </Ratio>

                                    <Card.Body>
                                        <Card.Title
                                            as={Link}
                                            to={`/products/${product.id}`}
                                        >
                                            {product.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </main>
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
