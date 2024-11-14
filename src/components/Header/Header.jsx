import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaShoppingCart } from "react-icons/fa";
import { ShopCart } from '../ShopCart/ShopCart';
import { setCartOpen } from '../../redux/Slice/fetchItems';

export const Header = () => {
    const dispatch = useDispatch();
    const { cartOpen, arrOrders } = useSelector(state => state.fetchItems);

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <div className="header-nav">
                    <FaShoppingCart
                        onClick={() => dispatch(setCartOpen())}
                        className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />
                    <div className='shop-cart-button_elem'>{arrOrders.length}</div>
                    <ul className="nav">
                        <li onClick={() => alert('Hi')}>Про нас</li>
                        <li onClick={() => alert('Hi')}>Контакты</li>
                        <li onClick={() => alert('Hi')}>Профиль</li>
                    </ul>
                    <ShopCart />
                </div>
            </div>
            <div className="presentation"></div>
        </header>
    );
}


