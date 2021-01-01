import React from 'react';
import Modal from 'react-bootstrap/Modal';

// Estructura

export const Modals = ({ show, CloseModal, Title, children }) => (
    <Modal show={show} onHide={CloseModal} centered>
        <Modal.Header closeButton>
            <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);
