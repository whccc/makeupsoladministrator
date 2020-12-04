import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

//Estructura



export const Modals = ({
    show,
    CloseModal,
    Title
}) => {
    return (
        <Modal show={show} onHide={CloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Title}
            </Modal.Body>
        </Modal>
    );
}

