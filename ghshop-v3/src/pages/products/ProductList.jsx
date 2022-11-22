import React, { useRef, useState } from "react";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Form,
    Pagination,
    Row,
    Stack,
} from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

const ProductList = () => {
    const { products, categories } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState([]);
    const [displayStyle, setDisplayStyle] = useState("grid"); // list
    const filterRef = useRef();

    const filteredProducts = products.filter((product) => {
        if (filter.length === 0) return true;
        else return filter.includes(product.category);
    });

    const total = filteredProducts.length;
    const pageSize = 9;
    const totalPage = Math.ceil(total / pageSize);

    const paginationItems = new Array(totalPage)
        .fill(null)
        .map((value, index) => (
            <Pagination.Item
                key={index}
                active={index === currentPage}
                onClick={() => setCurrentPage(index)}
            >
                {index + 1}
            </Pagination.Item>
        ));

    const productsByPage = filteredProducts.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    return (
        <Container>
            <Row>Breadcrumb</Row>

            <Row>
                <ButtonGroup>
                    <Button onClick={() => setDisplayStyle("grid")}>
                        Lưới
                    </Button>
                    <Button onClick={() => setDisplayStyle("list")}>
                        List
                    </Button>
                </ButtonGroup>
            </Row>

            <Row>
                <Col xs={false} lg={3}>
                    Lọc sản phẩm
                    <Stack direction="vertical">
                        <Form
                            onChange={() => {
                                const newFilter = [];
                                filterRef.current.elements.filter.forEach(
                                    (checkbox) => {
                                        if (checkbox.checked)
                                            newFilter.push(checkbox.value);
                                    }
                                );

                                setFilter(newFilter);
                            }}
                            ref={filterRef}
                        >
                            {categories.map((cate) => (
                                <Form.Check
                                    key={cate}
                                    name="filter"
                                    type="checkbox"
                                    label={cate}
                                    value={cate}
                                />
                            ))}
                        </Form>
                    </Stack>
                </Col>

                <Col xs={12} lg={9}>
                    <Row style={{ rowGap: "24px" }}>
                        {productsByPage.map((product) => (
                            <Col
                                key={product.id}
                                xs={12}
                                md={displayStyle === "grid" ? 6 : 12}
                                lg={displayStyle === "grid" ? 4 : 12}
                            >
                                <ProductCard
                                    product={product}
                                    displayStyle={displayStyle}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Pagination>{paginationItems}</Pagination>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductList;
