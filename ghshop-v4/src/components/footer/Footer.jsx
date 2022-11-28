import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

import styles from "../footer/Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="justify-content-betwen" className={styles.footerTop}>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Liên hệ với chúng tôi</h4>
                            <p><a href="">Địa chỉ: An Ninh, Tiền Hải, Thái Bình</a></p>
                            <p><a href="">Hotline: +84-9043 39993</a></p>
                            <p><a href="">Email: khangdinhtb@gmail.com</a></p>
                            <p><a href="">Giờ mở cửa: Hai - Chủ Nhật: 9am-7pm</a></p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Chăm sóc khách hàng</h4>
                            <p><a href="">Chính sách điều khoản</a></p>
                            <p><a href="">Hướng dẫn mua hàng</a></p>
                            <p><a href="">Chính sách thanh toán</a></p>
                            <p><a href="">Chính sách giao nhận và vận chuyển</a></p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Thông tin</h4>
                            <p><a href="">Về GHSHOP</a></p>
                            <p><a href="">Tuyển dụng</a></p>
                            <p><a href="">Hệ thống cửa hàng</a></p>
                            <p><a href="">Lorem, ipsum.</a></p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Theo dõi chúng tôi</h4>
                            <p><a href="">
                                <BsFacebook />
                            </a></p>
                            <p><a href="">
                                <BsInstagram />
                            </a></p>
                            <p><a href="">
                                <BsYoutube />
                            </a></p>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <span className={styles.copyRight}>Copyright © 2022 by GHSHOP</span>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
