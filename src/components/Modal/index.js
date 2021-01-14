import React from 'react';
import Modal from 'react-bootstrap/Modal';

// Estructura

export const Modals = ({ show, CloseModal, Title, children }) => {
    const Close = () => {
        CloseModal(!show);
    };
    return (
        <Modal show={show} onHide={Close} centered>
            <Modal.Header closeButton>
                <Modal.Title>{Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};
