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
                <Row>
                    <Col>
                        {productData.map((item, index) => (
                            <ProductItem key={item.id}>

                            </ProductItem>
                        ))}
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

function ProductItem = () => {
    return (
    
    );
};

export default ProductBabys;