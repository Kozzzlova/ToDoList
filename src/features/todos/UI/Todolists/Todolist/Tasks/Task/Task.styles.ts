import { SxProps } from '@mui/material';

export const getListItemSx = (isDone: boolean): SxProps => ({
   padding: '0',
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   opacity: isDone ? '0.5' : '1',
});
