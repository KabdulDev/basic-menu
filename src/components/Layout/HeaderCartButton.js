import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsActivated, setBtnIsActivated] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items } = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce( (currNumber, item) => {
        return currNumber + item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnIsActivated ? classes.bump : ''}` ;

    useEffect( () => {
        if (items.length === 0) {
            return;
        }
        setBtnIsActivated(true);
        
        
        const timer = setTimeout( () => {
            setBtnIsActivated(false);
        }, 30);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    
    


    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className= {classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;