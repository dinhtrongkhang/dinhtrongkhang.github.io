import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Home.module.css";

const Banner = () => {
    const [activeBanner, setActiveBanner] = useState(0);

    const swiperProps = {
        modules: [Navigation, Pagination],
        spaceBetween: 4,
        slidesPerView: 1,
        navigation: true,
    };

    return (
        <section className={styles.banner}>
            <Container>
                <Swiper {...swiperProps}>
                    <SwiperSlide>
                        <img className={styles.imgSlider} src="/banner-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.imgSlider} src="/banner-2.webp" alt="" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
};

export default Banner;
