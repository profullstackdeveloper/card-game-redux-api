import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    font-family: 'Robus';
    font-size: 64px;
    color: #b60000;
    text-shadow: 0px 0px 8px rgb(0 0 0);
    transition: text-shadow 1s ease;
    &:hover {
        cursor: pointer;
        text-shadow: 0px 0px 8px rgb(166 196 42);
    }
    @media (max-width: 425px) {
        font-size: 50px;
    }
`
export default function TextButton({ content }) {
    return (
        <Container onClick={() => window.location.reload()}>
            {content}
        </Container>
    )
}