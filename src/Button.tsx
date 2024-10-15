// import * as React from 'react';
// import { ButtonHTMLAttributes } from 'react';
// type Props = {
//    title: string;
// };
// export const Button = ({ title }: ) => {
//    return <button type='reset'>{title}</button>;
// };


type ButtonProps = {
   title: string;
   onClick: () => void;
   className?: string;
};

export const Button = ({ title, onClick, className }: ButtonProps) => {
   return (
      <button
         className={className}
         onClick={onClick}>
         {title}
      </button>
   );
};

// type ButtonProps = {
//    title: string;
//    callBack: () => void;
// };
// export const Button = ({ title, callBack }: ButtonProps) => {
//    const onClickHandler = () => {
//       callBack();
//    };
//    return <button onClick={onClickHandler}>{title}</button>;
// };
