import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

import styles from "../footer/Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="justify-content-betwen" className={styles.footerTop}>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Liên hệ với chúng tôi</h4>
                            <p>Địa chỉ: An Ninh, Tiền Hải, Thái Bình</p>
                            <p>Hotline: +84-9043 39993</p>
                            <p>Email: khangdinhtb@gmail.com</p>
                            <p>Giờ mở cửa: Hai - Chủ Nhật: 9am-7pm</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Chăm sóc khách hàng</h4>
                            <p>Chính sách điều khoản</p>
                            <p>Hướng dẫn mua hàng</p>
                            <p>Chính sách thanh toán</p>
                            <p>Chính sách giao nhận và vận chuyển</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Thông tin</h4>
                            <p>Về GHSHOP</p>
                            <p>Tuyển dụng</p>
                            <p>Hệ thống cửa hàng</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <Stack className="text-start mt-3">
                            <h4 className={styles.footerTitle}>Theo dõi chúng tôi</h4>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                            <p>Lorem, ipsum.</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <span className={styles.copyRight}>Copyright © 2022 by GHSHOP.</span>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
