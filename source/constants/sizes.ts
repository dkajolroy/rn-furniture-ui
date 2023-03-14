import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const SIZES = {
  //base sizes
  base: 8,
  fonts: 14,
  radius: 12,
  padding: 24,

  //font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  //Dimension
  height,
  width,
};

export default SIZES;
