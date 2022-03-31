import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reducer';

export default configureStore({
  reducer: {
    gameState: cardReducer,
  },
})