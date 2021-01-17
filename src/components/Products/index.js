import React from 'react';
import { Container, Button } from './styles';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FormatNumber } from '../../Helpers';
const JsonButton = [
    {
        Name: 'Modificar',
        Icon: <FaEdit />,
        Background: 'var(--bg-primary-blue)'
    },
    {
        Name: 'Eliminar',
        Icon: <FaTrashAlt />,
        Background: 'tomato'
    }
];

const Buttons = (ObjButton) => {
    return <Button {...ObjButton}>{ObjButton.Icon}</Button>;
};

export const Products = ({
    _id,
    strDescription,
    strPrice,
    strName,
    ArrayImages,
    FCDeleteProductModal,
    FCUpdateProductModal
}) => {
    return (
        <Container>
            <div>
                <img loading="lazy" src={ArrayImages[0]} lazy />
            </div>
            <div>
                <p>{strName}</p>
                <p>{strDescription}</p>
                <p>$ {FormatNumber(strPrice)}</p>
                <div>
                    {JsonButton.map((Elementos, index) => {
                        return (
                            <Buttons
                                key={index}
                                Name={Elementos.Name}
                                Icon={Elementos.Icon}
                                Background={Elementos.Background}
                                onClick={
                                    Elementos.Name == 'Eliminar'
                                        ? FCDeleteProductModal
                                        : FCUpdateProductModal
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};
