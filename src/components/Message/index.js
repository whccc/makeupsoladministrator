import React from 'react';
import { Container } from './styles';

export const Message = ({ Text, blnShow, Type }) => {
    return blnShow ? (
        <Container Type={Type} blnShow={blnShow}>
            {Text}
        </Container>
    ) : null;
};
