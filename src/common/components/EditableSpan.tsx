import  { ChangeEvent, useState } from 'react';

type Props = {
   value: string;
   onChangeSpan: (newSpan: string) => void;
};

const EditableSpan = ({ value, onChangeSpan }: Props) => {
   const [editMode, setEditMode] = useState(false);
   const [title, setTitle] = useState(value);
   const changeModeHandler = () => {
      setEditMode(!editMode);
      if (editMode) {
         onChangeSpan(title);
      }
   };
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
   };
   return editMode ? (
      <input
         autoFocus
         value={title}
         onBlur={changeModeHandler}
         onChange={onChangeHandler}
      />
   ) : (
      <span onDoubleClick={changeModeHandler}>{value}</span>
   );
};

export default EditableSpan;
