import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/vegan.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1> Karimu's Confectionaries</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className = {classes['main-image']}>
            <img src = {mealsImage} alt="A close up plate of Vegan Soul Food"/>
        </div>
    </Fragment>
};

export default Header;