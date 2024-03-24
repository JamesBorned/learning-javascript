import React from 'react';
import classes from './MyButton.module.css'; //стиль как свойство объекта

const MyButton = ({children, ...props}) => {
    //children - вложенный элемент
    //все пропсы - в кнопку
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;