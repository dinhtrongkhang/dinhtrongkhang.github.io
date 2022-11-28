import React from "react";
import { Container, Stack } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="py-5">
            <Container>
                <Stack
                    direction="horizontal"
                    className="justify-content-center"
                >
                    Dinh Gia Huy
                </Stack>
            </Container>
        </footer>
    );
};

export default Footer;
