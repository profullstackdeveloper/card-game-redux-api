import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createDeck = createAsyncThunk('createDeck', async () => {
    const apiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/';
    const response = await axios.post(apiUrl, {
        deck_count: 1
    });
    return response.data;
})

export const getCards = createAsyncThunk('getCards', async (fetchData, { getState }) => {
    const deckId = getState().gameState.deckInfo.deck_id;
    const baseAPIUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/`;
    const result = await axios.get(baseAPIUrl, {
        params: { count: 2 }
    });
    return result.data.cards;
})

export const cardGame = createSlice({
    name: 'cardGameState',
    initialState: {
        player1: '',
        player2: '',
        p1Card: '',
        p2Card: '',
        deckInfo: undefined,
    },
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(createDeck.fulfilled, (state, action) => {
            state.deckInfo = action.payload;
        })
        builder.addCase(getCards.fulfilled, (state, action) => {
            if (state.deckInfo && state.deckInfo.success) {
                state.player1 = action.payload[0].image;
                state.player2 = action.payload[1].image;
                state.p1Card = action.payload[0].code;
                state.p2Card = action.payload[1].code;
            }
            else {
                throw new Error('Get data failed! Please check your network state.');
            }
        })
    }
})

// Action creators are generated for each case reducer function
export const { chosenCardsForPlayers } = cardGame.actions
export default cardGame.reducer;