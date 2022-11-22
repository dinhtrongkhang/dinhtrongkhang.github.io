import React from "react";
import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/product-card/ProductCard";

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
                <Swiper {...swiperProps}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </main>
    );
};

export default Home;
