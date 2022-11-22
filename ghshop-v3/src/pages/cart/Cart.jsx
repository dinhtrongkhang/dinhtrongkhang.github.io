import React from "react";
import { Table, ButtonGroup, Button, Stack } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { products, cart, increment, decrement } = useOutletContext();

    const shoppingCart = cart.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.productId),
    }));

    const totalPrice = shoppingCart.reduce(
        (total, item) => (total += item.product.price * item.quantity),
        0
    );

    return (
        <div className="container mt-5">
            <p>Giỏ hàng</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Thông tin</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>

                <tbody>
                    {shoppingCart.map((item) => (
                        <tr key={item.product.id}>
                            <td>
                                <img width={200} src={item.product.image} />
                            </td>
                            <td>
                                <Stack direction="vertical">
                                    <span>{item.product.title}</span>
                                    <span>${item.product.price}</span>
                                </Stack>
                            </td>
                            <td>
                                <ButtonGroup>
                                    <Button
                                        variant="light"
                                        onClick={() =>
                                            decrement(item.productId)
                                        }
                                    >
                                        -
                                    </Button>
                                    <Button variant="light">
                                        {item.quantity}
                                    </Button>
                                    <Button
                                        variant="light"
                                        onClick={() =>
                                            increment(item.productId)
                                        }
                                    >
                                        +
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={2}>Tổng tiền</td>
                        <td>${totalPrice}</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Cart;
