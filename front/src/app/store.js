import { configureStore } from '@reduxjs/toolkit'
import keyboardsReducer from '../features/keyboards/KeyboardsSlice';
import wordsReducer from '../features/practices/words/wordsSlice';
import keysReducer from '../features/practices/keys/keysSlice';
import sentenceReducer from '../features/practices/sentences/sentenceSlice';

export default configureStore({
  reducer: {
    keyboards: keyboardsReducer,
    words: wordsReducer,
    keys: keysReducer,
    sentence: sentenceReducer,
  }
});
