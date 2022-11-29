import React from "react";
import { Container, Row, Col, Card, Stack, Ratio, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/features/products/products.slice";

import styles from "./Home.module.css";

const Home = () => {
    const products = useSelector(selectAllProducts);

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
                    <Col xs={12} md={6} lg={6} xl={6} className="mt-5">
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
                    <Col xs={12} md={6} lg={6} xl={6} className="mt-5">
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
                    <Col xs={12} md={6} lg={6} xl={6} className="mt-5">
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
                    <Col xs={12} md={6} lg={6} xl={6} className="mt-5">
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


            <Container className={styles.title}>
                <h2>Sản phẩm bán chạy</h2>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        {/* <Swiper {...swiperProps}>
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-baby-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo thun bé trai</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-women-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo polo nữ</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-jacket-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo khoác bé trai</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-men-1.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo sơ mi nam dài tay</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.title}>
                <h2>Sản phẩm nổi bật</h2>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        {/* <Swiper {...swiperProps}>
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-baby-3.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo thun bé trai</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-women-4.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo thun dài tay nữ</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-jacket-5.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo khoác nữ</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-men-3.webp"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <h3>Áo sơ mi nam dài tay</h3>
                            <span>200.000đ</span>
                            <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.title}>
                <h2>Tin tức thời trang</h2>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        {/* <Swiper {...swiperProps}>
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-new-1.png"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <a href="">Cách phối đồ cho bé gái theo từng độ tuổi siêu đáng yêu</a>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-new-2.jpg"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <a href="">Cách phối đồ nam mùa đông cực thời trang và trendy</a>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-new-7.jpg"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <a href="">Phối đồ với túi xách màu trắng thêm phần sang trọng, sang chảnh</a>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Ratio aspectRatio="1x1">
                                <Card.Img
                                    src="/gh-new-8.jpg"
                                    style={{ objectFit: "cover" }}
                                />
                            </Ratio>
                        </Card>
                        <Stack>
                            <a href="">Phối đồ với boots nữ cá tính nhưng vẫn cực kỳ sang chảnh</a>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Home;
