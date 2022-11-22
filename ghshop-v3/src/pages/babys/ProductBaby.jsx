import React from 'react';
import { productData } from './ProductData';


import { Container, Row, Col, Card, Ratio, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Banner from '../home/Banner';



const ProductBabys = () => {
    return (
        <main>
            <Banner />
            <Container>
                <h1>Xin chao Dinh Gia Huy</h1>
            </Container>
        </main>
    );
};

export default ProductBabys;