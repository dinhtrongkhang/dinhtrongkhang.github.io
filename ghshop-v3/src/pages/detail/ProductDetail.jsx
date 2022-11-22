import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Row,
    Stack,
    Toast,
} from "react-bootstrap";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";

const ProductDetail = () => {
    const { products } = useOutletContext();
    const { productId } = useParams();
    const { cart, addToCart } = useOutletContext();

    const product = products.find((product) => product.id == productId);

    const swiperProps = {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: true,
    };

    const handleAddToCartClick = () => {
        addToCart(product.id);
        toast("Thêm sản phẩm vào giỏ hàng thành cmn công");
    };

    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <Swiper {...swiperProps}>
                        {new Array(5).fill(product.image).map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={product.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>

                <Col xs={12} lg={6}>
                    <h2>{product.title}</h2>
                    <p>Danh mục: {product.category}</p>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={product.rating.rate}
                        isHalf={true}
                    />{" "}
                    ({product.rating.count} lượt vote)
                    <Stack direction="vertical">
                        <ButtonGroup>
                            <Button variant="light">-</Button>
                            <Button variant="light">1</Button>
                            <Button variant="light">+</Button>
                        </ButtonGroup>
                        <Button onClick={handleAddToCartClick}>
                            Add to Cart
                        </Button>
                    </Stack>
                </Col>
            </Row>

            <Row>Thông tin chi tiết hơn về sản phẩm</Row>

            <Row>
                <Col>Sản phẩm liên</Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
