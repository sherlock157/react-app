import React, {useState} from 'react';
import {Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

const Reactstrap = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={{size: 6}}>
                    <Button color="primary" onClick={() => setModalOpen(true)}>Click me!</Button>
                </Col>
            </Row>


            <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)} fullscreen>
                <ModalHeader>
                    Lorem ipsum dolor sit amet.
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi beatae consequuntur
                    delectus dolorum fuga, fugiat hic illo iste magnam maiores modi nam officia recusandae reprehenderit
                    sint ut velit voluptas.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setModalOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default Reactstrap;