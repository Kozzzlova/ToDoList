import createTheme from '@mui/material/styles/createTheme';
import { ThemeMode } from '../../app/app-reducer';

export const getTheme = (themeMode: ThemeMode) => {
   return createTheme({
      palette: {
         mode: themeMode === 'light' ? 'light' : 'dark',
         primary: {
            main: '#c05a99',
         },
         secondary: {
            main: '#71c0df',
         },
         success: {
            main: '#6ad199',
         },
      },
   });
};
