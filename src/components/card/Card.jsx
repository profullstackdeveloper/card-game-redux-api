import React from 'react';
import styled, { keyframes } from 'styled-components';
const CardOpenAnimation = keyframes`
    from {
        width: calc(0px / 52);
    }
    to {
        width: calc(100% / 52);
    }
`
const CardMovement = (direction) => keyframes`
    from {
        width: calc(100% / 52);
    }
    to {
        width: 0px;
        transform: ${direction === 'up' ? 'translateY(-200%)' : 'translateY(200%)'}
    }
`
const CardContainer = styled.div`
    width: calc(100% / 52);
    animation: ${props => props.action === 'true' ? CardMovement(props.direction) : CardOpenAnimation} 0.5s ${props => props.delay}s ease-in-out 1;
    animation-fill-mode: forwards;
    z-index: 2;
    &:hover {
        transform: translateY(-20px);
        cursor: pointer;
    }
`
const CardImage = styled.img`
    width: 90px;
    height: 135px;
    @media (max-width: 768px) {
        width: 60px;
        height: 90px;
    }
    @media (max-width: 375px) {
        width: 40px;
        height: 60px;
    }
`
export default function Card({player1SelectedCard, setPlayer1SelectedCard, player2SelectedCard, cardIndex, setShowModal}) {
    const [action, setAction] = React.useState(false);
    const [direction, setDirection] = React.useState('up');
    const [delay, setDelay] = React.useState(0);
    const player1Action = () => {
        setPlayer1SelectedCard(cardIndex);
        setAction(true);
        setDirection('up');
    }
    React.useEffect(() => {
        if(player2SelectedCard === cardIndex) {
            setAction(true);
            setDelay(1);
            setDirection('down');
            setShowModal(true)
        }
    }, [player2SelectedCard])
    return (
        <CardContainer 
            onClick={() => player1SelectedCard ? () => {} : player1Action()} 
            action={action.toString()} 
            delay={delay}
            direction={direction}
        >
            <CardImage src={"assets/images/backgrounds/card.png"}></CardImage>
        </CardContainer>
    )
}