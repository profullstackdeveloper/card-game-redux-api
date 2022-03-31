import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: black;
`

const HeaderContainer = styled.div`
    flex: 0 0 auto;
    width: 100%;
    z-index: 1;
`

const BodyContainer = styled.div`
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
`


export default function Layout ({children}) {
    return (
        <Container>
            <HeaderContainer>
                <Header></Header>
            </HeaderContainer>
            <BodyContainer>
                {
                    children
                }
            </BodyContainer>
        </Container>
    )
}