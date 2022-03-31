import React from 'react';
import styled, {keyframes} from 'styled-components';
import TextButton from '../button/TextButton';

const ModalAnimation = keyframes`
    from {
        visibility: visible;
        backdrop-filter: blur(0px);
    }
    to {
        visibility: visible;
        backdrop-filter: blur(10px);
    }
`
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0px;
    backdrop-filter: blur(10px);
    align-items: center;
    justify-content: center;
    z-index: 100;
    visibility: hidden;
    animation: ${ModalAnimation} 1s 2s ease 1;
    animation-fill-mode: forwards;
`
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PlayerImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`
const CardImage = styled.img`
    width: 60px;
    height: 90px;
`
const TextDecorator = styled.div`
    font-size: 96px;
    font-family: Robus;
    color: yellow;
    line-height: 100px;
`
const PlayerBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ModalBody = styled.div`
    display: flex;
    align-items: center;
`
const VsImage = styled.img`
    width: 150px;
    height: 150px;
    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

export default function Modal({ isOpen, onClose, gameState }) {
    const numTag = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'];
    const player1 = gameState?.player1?.card.slice(0, gameState.player1.card.length-1);
    const player2 = gameState?.player2?.card.slice(0, gameState.player2.card.length-1);
    const win = numTag.indexOf(player1) > numTag.indexOf(player2) ? true : false;
    return (
        isOpen ? <Container>
            <ModalContainer>
                <TextDecorator>{win ? 'you win!' : 'you lost!'}</TextDecorator>
                <ModalBody>
                    <PlayerBoard>
                        <PlayerImage src={'assets/images/avatars/' + gameState.player1.avatar}></PlayerImage>
                        {
                            gameState.player1.image ? <CardImage src={gameState.player1.image}></CardImage> : ''
                        }
                    </PlayerBoard>
                    <VsImage src="assets/images/vs.png"></VsImage>
                    <PlayerBoard>
                        <PlayerImage src={'assets/images/avatars/' + gameState.player2.avatar}></PlayerImage>
                        {
                            gameState.player2.image ? <CardImage src={gameState.player2.image}></CardImage> : ''
                        }
                    </PlayerBoard>
                </ModalBody>
                <TextButton content={'Play Again'}></TextButton>
            </ModalContainer>
        </Container>
            : ''
    )
}