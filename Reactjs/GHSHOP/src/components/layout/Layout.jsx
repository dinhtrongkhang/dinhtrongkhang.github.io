import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>Logo</div>

                <Navigation />
            </header>

            <Outlet />

            <footer>
                <div className={styles.footer}>
                    <div>
                        <h3>Liên hệ với chúng tôi</h3>
                        <p><span>Địa chỉ: </span> An Ninh, Tiền Hải, Thái Bình</p>
                        <p><span>Hotline: </span> +84-9043 39993</p>
                        <p>Email: khangdinhtb@gmail.com</p>
                        <p>Giờ mở cửa: <span>Hai - Chủ Nhật:</span> 9am-7pm</p>
                    </div>
                    <div>
                        <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                        <p>Chính sách điều khoản</p>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Chính sách thanh toán</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành</p>
                        <p>Chính sách giao nhận và vận chuyển</p>
                    </div>
                    <div>
                        <h3>Thông tin</h3>
                        <p>Về GHSHOP</p>
                        <p>Tuyển dụng</p>
                        <p>Hệ thống cửa hàng</p>
                    </div>
                    <div>
                        <h3>Theo dõi chúng tôi</h3>
                        <div>
                            <a href="https://www.facebook.com/khangdinh99/">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/dinh.trong.khang/">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC6kb8QEAD8zy-NhVpxxSvmw">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;