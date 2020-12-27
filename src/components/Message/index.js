import React from 'react';
import { Container } from './styles';

export const Message = ({ Text, blnShow }) => {
    return blnShow ? <Container blnShow={blnShow}>{Text}</Container> : null;
};
