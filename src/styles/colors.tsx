import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333'
  }
}

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff'
  }
}
const colors = {
  primary: '#7b0000',
  secondary: '#FFBC0D',
  tertiary: 'rgb(32,34,37)',
  quarternary: '#292b2f',
  quinary: '#393d42',
  senary: '#828386',

  white: '#fff',
  gray: '#8a8c90',
  chatInput: 'rgb(64,68,75)',
  symbol: '#74777a',

  error: '#B00020',
  notification: '#B00020',
  discord: '#6e86d6',
  mentionDetails: '#f9a839',
  mentionMessage: '#413f3f',
  
  link: '#5d80d6',
  rocketseat: '#6633cc'
};

export default colors;

