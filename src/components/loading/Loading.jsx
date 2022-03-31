import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BackgroundImage = styled.img`
    width: 100vw;
    height: 100vh;
    position: absolute;
    object-fit: cover;
    top: 0px;
    left: 0px;
    opacity: 0.6;
`
const Content = styled.div`
    font-size: 32px;
    color: white;
    font-weight: 700;
`
export default function Loading () {
    return (
        <Container>
            <BackgroundImage src="assets/images/backgrounds/loading.jpg"></BackgroundImage>
            <Content>LOADING...</Content>
        </Container>
    )
}