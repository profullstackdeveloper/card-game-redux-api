import React from 'react';
import styled from 'styled-components';
const PlayerBoard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${props => props.reverse === 'false' ? 'row' : 'row-reverse'};
    position: absolute;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    bottom: ${props => props.position.bottom};
    right: ${props => props.position.right};
`
const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`
const Button = styled.div`
    width: 100px;
    height: 30px;
    color: red;
    font-size: 24px;
    font-weight: 100;
    font-family: 'Evil';
    cursor: pointer;
    margin-left: 20px;
    margin-right: 60px;
`
export default function Player({ reverse, image, position}) {
    return (
        <PlayerBoard reverse={reverse} position={position}>
            <Avatar src={image}></Avatar>
        </PlayerBoard>
    )
}