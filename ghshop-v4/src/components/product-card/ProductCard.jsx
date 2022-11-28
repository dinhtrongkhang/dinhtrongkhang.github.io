import React from "react";
import { Card, Ratio, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product, displayStyle = "grid" }) => {
    return (
        <Card>
            <Stack
                direction={displayStyle === "grid" ? "vertical" : "horizontal"}
            >
                <Ratio aspectRatio="1x1">
                    <Card.Img
                        as={Image}
                        thumbnail={true}
                        variant="top"
                        src={product.image}
                        style={{ objectFit: "contain" }}
                    />
                </Ratio>

                <Card.Body>
                    <Card.Title as={Link} to={`/products/${product.id}`}>
                        {product.title}
                    </Card.Title>
                </Card.Body>
            </Stack>
        </Card>
    );
};

export default ProductCard;
