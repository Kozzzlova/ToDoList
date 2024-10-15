import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

type Props = {
   backgroundColor?: string;
};

export const MenuButton = styled(Button)<Props>(({ backgroundColor, theme }) => ({
   minWidth: '90px',
   fontWeight: 'bold',
   boxShadow: `2px 2px 0 0 ${theme.palette.primary.dark}`,
   borderRadius: '5px',
   textTransform: 'capitalize',
   margin: '0 10px',
   padding: '8px 24px',
   color: theme.palette.primary.contrastText,
   background: backgroundColor || `${theme.palette.primary.light}`,
}));
