import React from 'react';
import styled, { keyframes } from 'styled-components';
import TextButton from '../button/TextButton';

const Container = styled.div`
    width: calc(100vw - 100px);
    height: 80px;
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    background-image:linear-gradient(to bottom,rgb(0, 0, 0) 0.5%,rgb(0, 0, 0) 20.3%,rgba(160, 0, 100, 0.75) 52.4%,rgb(0, 0, 0) 86.1%);;
    background-size: contain;
    @media (max-width: 768px) {
        width: calc(100vw - 40px);
        padding-left: 20px;
        padding-right: 20px;
    }
`

const HeaderBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.img`
    width: fit-content;
    height: 80px;
    object-fit: contain;
    @media (max-width: 425px) {
        width: 130px;
    }
`
const VSShow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    @media (max-width: 768px) {
        display: none;
    }
`
const VSTextAnimation = keyframes`
    0% {
        color: white;
        text-shadow: 0px 0px 18px rgba(166,196,42,0.2);
    }
    50% {
        color: red;
        text-shadow: 0px 0px 18px rgba(166,196,42,1);
    }
    100% {
        color: white;
        text-shadow: 0px 0px 18px rgba(166,196,42,0.2);
    }
`
const VSText = styled.div`
    font-family: 'Evil';
    font-size: 24px;
    color: red;
    animation: ${VSTextAnimation} 2s ease-in-out infinite;
`

const Player = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export default function Header () {
    return (
        <Container>
            <HeaderBox>
                <Logo src='assets/images/logo/logo.png'></Logo>
                <VSShow>
                    <Player src='assets/images/avatars/Player2.png'></Player>
                    <VSText>vs</VSText>
                    <Player src='assets/images/avatars/Player.jpg'></Player>
                </VSShow>
                <TextButton content={'new game'}></TextButton>
            </HeaderBox>
        </Container>
    )
}