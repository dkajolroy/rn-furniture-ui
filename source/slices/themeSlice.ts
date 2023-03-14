import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
import {baseColors, dark, light} from '../constants/colors';

const systemTheme = useColorScheme();
const colors = systemTheme === 'light' ? light : dark;
const initialState = {
  name: systemTheme,
  COLORS: {
    ...baseColors,
    ...colors,
  },
};

const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: state => {
      console.log(state);
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
