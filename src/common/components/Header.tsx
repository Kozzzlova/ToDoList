import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuButton } from './MenuButton';
import Switch from '@mui/material/Switch';
import { switchThemeAC } from '../../app/app-reducer';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

export const Header = () => {
   const themeMode = useAppSelector(
      (state) => state.app.themeMode
   );
   const dispatch = useAppDispatch();

   const changeModeHandler = () => {
      dispatch(switchThemeAC(themeMode === 'light' ? 'dark' : 'light'));
   };
   return (
      <AppBar
         position='fixed'
         color='primary'>
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton color='inherit'>
               <MenuIcon />
            </IconButton>
            <div>
               {' '}
               <MenuButton>Login</MenuButton>
               <MenuButton>Logout</MenuButton>
               <MenuButton>Faq</MenuButton>
               <Switch
                  color={'default'}
                  onChange={changeModeHandler}
               />
            </div>
         </Toolbar>
      </AppBar>
   );
};
