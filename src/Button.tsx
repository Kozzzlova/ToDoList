// import * as React from 'react';
// import { ButtonHTMLAttributes } from 'react';
// type Props = {
//    title: string;
// };
// export const Button = ({ title }: ) => {
//    return <button type='reset'>{title}</button>;
// };

import { MouseEvent } from 'react';

import { ButtonHTMLAttributes } from 'react';

export const Button = ({ title }: ButtonHTMLAttributes<HTMLButtonElement>) => {
   return <button>{title}</button>;
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
