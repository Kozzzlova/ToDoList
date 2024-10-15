import { useState, KeyboardEvent, ChangeEvent } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type Props = {
   addItem: (title: string) => void;
};

const AddItemForm = ({ addItem }: Props) => {
   const [error, setError] = useState<null | string>(null);
   const [item, setItem] = useState('');

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setItem(e.currentTarget.value);
      setError(null);
   };
   const addItemOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.altKey && e.key === 'Enter') {
         addItemHandler();
      }
   };
   const addItemHandler = () => {
      if (item.trim() !== '') {
         addItem(item.trim());
      } else {
         setError('Title is required');
      }
      setItem('');
   };
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}>
         <TextField
            label='Enter a title'
            variant={'outlined'}
            value={item}
            size={'small'}
            onChange={onChangeHandler}
            onKeyUp={addItemOnKeyUpHandler}
            error={!!error}
            helperText={error}
            color='primary'
         />

         <IconButton
            aria-label='add'
            color='primary'
            sx={{ maxWidth: '30px', height: '30px', minWidth: '30px' }}
            onClick={addItemHandler}>
            <PlaylistAddIcon />
         </IconButton>
      </Box>
   );
};

export default AddItemForm;
