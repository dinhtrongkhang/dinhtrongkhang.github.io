import React, { useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product-card/ProductCard";
import { selectProductsList } from "../../store/features/products/products.slice";

const ProductList = () => {
    const {
        categories,
        products,
        currentPage,
        totalPage,
        displayStyle,
        pageChanged,
        displayChanged,
        filterChanged,
    } = useSelector(selectProductsList);
    const dispatch = useDispatch();
    const filterRef = useRef();

    const paginationItems = new Array(totalPage)
        .fill(null)
        .map((value, index) => (
            <Pagination.Item
                key={index}
                active={index === currentPage}
                onClick={() => dispatch(pageChanged(index))}
            >
                {index + 1}
            </Pagination.Item>
        ));

    return (
        <Container>
            <Row>Breadcrumb</Row>

            <Row>
                <ButtonGroup>
                    <Button onClick={() => dispatch(displayChanged("grid"))}>
                        Lưới
                    </Button>
                    <Button onClick={() => dispatch(displayChanged("list"))}>
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
                                const filter = [];
                                filterRef.current.elements.filter.forEach(
                                    (checkbox) => {
                                        if (checkbox.checked)
                                            filter.push(checkbox.value);
                                    }
                                );

                                dispatch(filterChanged(filter));
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
                        {products.map((product) => (
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
