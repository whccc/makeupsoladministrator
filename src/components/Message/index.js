import React, { useEffect } from 'react';
import { Container } from './styles';

export const Message = ({ Text, blnShow, Type, setShowMessage }) => {
    if (blnShow) {
        setTimeout(() => {
            setShowMessage({ blnShow: false });
        }, 4000);
    }

    return blnShow ? (
        <Container Type={Type} blnShow={blnShow}>
            {Text}
        </Container>
    ) : null;
};
