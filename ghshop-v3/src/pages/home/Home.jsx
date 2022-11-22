import React from "react";
import { Container, Row, Col, Card, Ratio, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/product-card/ProductCard";


import styles from "./Home.module.css";

const Home = () => {
    const { products } = useOutletContext();

    const swiperProps = {
        modules: [Navigation, Pagination],
        spaceBetween: 24,
        slidesPerView: 4,
        navigation: true,
    };

    return (
        <main>
            <Banner />

            <Container>
                <Row>
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
            </Container>

            <Container className="mt-5">
                <h1 className="mb-3">Sản phẩm mới</h1>
                <Swiper {...swiperProps}>
                    <Row>
                        <Swiper {...swiperProps}>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-baby-1.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun bé trai</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-women-3.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun dài tay nữ</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-men-3.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo sơ mi nam dài tay</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-baby-4.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun bé gái</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-baby-5.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun bé gái</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-baby-6.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun bé trai</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Swiper>
            </Container>

            <Container className="mt-5">
                <h1 className="mb-3">Sản phẩm bán chạy</h1>
                <Swiper {...swiperProps}>
                    <Row>
                        <Swiper {...swiperProps}>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-baby-1.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun bé trai</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-women-5.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun ngắn tay nữ</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-women-3.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo thun ngắn tay nữ</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-jacket-3.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo khoác bé gái</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-jacket-2.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo khoác bé gái</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-jacket-7.webp" alt="" />
                                <Container>
                                    <h3 className={styles.title}>Áo khoác nữ</h3>
                                    <div className={styles.productPrice}>
                                        <div className={styles.oldPrice}>250.000đ</div>
                                        <div className={styles.actualPrice}><span>200.000đ</span></div>
                                    </div>
                                    <Button className={styles.btn}>Thêm vào giỏ hàng</Button>
                                </Container>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Swiper>
            </Container>

            <Container className="mt-5">
                <h1 className="mb-3">Tin tức thời trang</h1>
                <Swiper {...swiperProps}>
                    <Row>
                        <Swiper {...swiperProps}>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-new-1.png" alt="" />
                                <a href="">Cách phối đồ cho bé gái theo từng độ
                                    tuổi siêu đáng
                                    yêu</a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-new-5.jpg" alt="" />
                                <a href="">Cách phối đồ nam mùa đông cực thời
                                    trang
                                    và
                                    trendy</a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-new-7.jpg" alt="" />
                                <a href="">Phối đồ với túi xách màu trắng thêm
                                    phần
                                    sang
                                    trọng,
                                    sang
                                    chảnh</a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={styles.imgSlider} src="./gh-new-8.jpg" alt="" />
                                <a href="">Phối đồ với boots nữ cá tính nhưng
                                    vẫn
                                    cực kỳ sang
                                    chảnh</a>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Swiper>
            </Container>
        </main>
    );
};

export default Home;
