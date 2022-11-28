import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
    const [activeBanner, setActiveBanner] = useState(0);

    const handleSelectBanner = (selectedBanner, e) => {
        setActiveBanner(selectedBanner);
    };

    return (
        <section>
            <Container className="d-none d-lg-block">
                <Carousel
                    activeIndex={activeBanner}
                    onSelect={handleSelectBanner}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/banner-1.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/banner-2.webp"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default Banner;
