import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";

const LoginForm = () => {
    const [show, setShow] = useState(false);

    const display = () => setShow(true);
    const close = () => setShow(false);

    return (
        <>
            <BsPerson onClick={display}/>
           
            <Modal show={show} onHide={close}>
                Nội dung
            </Modal>
        </>
    );
};

export default LoginForm;
