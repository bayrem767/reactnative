import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  accent: '#FF7363',
  purple: '#817DC0',
  blue: '#1E90FF',
  bluePage: '#B1E5F6',
  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
