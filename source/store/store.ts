import {configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import themeSlice from '../slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export const localStorage = new MMKV();
