import React from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/card/Card';
import Player from '../components/player/Player';
import { useSelector, useDispatch } from 'react-redux'
import { createDeck, getCards } from '../store/reducer'
import Modal from '../components/modal/Modal';

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: black;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
`

const BackgroundAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0.3;
    }
`
const BackgroundImage = styled.img`
    width: 100vw;
    height: calc(100vh - 100px);
    object-fit: contain;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    animation: ${BackgroundAnimation} 1s ease 1;
    animation-fill-mode: forwards;
`

const Playground = styled.div`
    width: 800px;
    display: flex;
    @media (max-width: 1280px) {
        width: 500px;
    }
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (max-width: 475px) {
        width: 200px;
    }
`

export default function Home() {
    const cards = new Array(52).fill(0);
    const [player1SelectedCard, setPlayer1SelectedCard] = React.useState();
    const [player2SelectedCard, setPlayer2SelectedCard] = React.useState();
    const [showModal, setShowModal] = React.useState(false);
    const [gameState, setGameState] = React.useState();
    const player1 = useSelector((state) => state.gameState.player1);
    const player2 = useSelector((state) => state.gameState.player2);
    const p1Card = useSelector((state) => state.gameState.p1Card);
    const p2Card = useSelector((state) => state.gameState.p2Card);
    const deckInfo = useSelector((state) => state.gameState.deckInfo);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(createDeck());
    }, [])
    React.useEffect(async() => {
        dispatch(getCards());
    }, [deckInfo]);
    React.useEffect(() => {
        const value = {
            player1: {
                avatar: 'Player2.png',
                image: player1,
                card: p1Card,
            },
            player2: {
                avatar: 'Player.jpg',
                image: player2,
                card: p2Card
            }
        }
        setGameState(value);
    }, [player1, player2, p1Card, p2Card])
    const players = {
        player1: {
            alignReverse: 'false',
            image: 'assets/images/avatars/Player2.png',
            position: {
                top: '20px',
                left: '20px'
            }
        },
        player2: {
            alignReverse: 'true',
            image: 'assets/images/avatars/Player.jpg',
            position: {
                bottom: '20px',
                right: '20px'
            }
        }
    }
    React.useEffect(() => {
        if(player1SelectedCard) {
            const number = Math.floor(Math.random() * 52) === player1SelectedCard ? player1SelectedCard + 1 : Math.floor(Math.random() * 52);
            setPlayer2SelectedCard(number);
        }
    }, [player1SelectedCard])
    return (
        <React.Fragment>
            <Container>
                <BackgroundImage src="assets/images/backgrounds/loading.jpg"></BackgroundImage>
                <Playground>
                    {
                        cards.map((card, index) => {
                            return (
                                <Card key={'card' + index} cardIndex={index} player1SelectedCard={player1SelectedCard} setPlayer1SelectedCard={setPlayer1SelectedCard} player2SelectedCard={player2SelectedCard} setShowModal={setShowModal} gameState={gameState}></Card>
                            )
                        })
                    }
                </Playground>
                {
                    Object.keys(players).map((key, index) => {
                        return (
                            <Player
                                key={'players' + index}
                                reverse={players[key].alignReverse}
                                image={players[key].image}
                                position={players[key].position}
                            ></Player>
                        )
                    })
                }
            </Container>
            <Modal isOpen={showModal} gameState={gameState}></Modal>
        </React.Fragment>
    )
}