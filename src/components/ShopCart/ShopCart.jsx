import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";

import { deleteOneOrders } from '../../redux/Slice/fetchItems';

export const ShopCart = () => {
    const dispatch = useDispatch();
    const { cartOpen, arrOrders } = useSelector(state => state.fetchItems);

    const deleteCart = (id) => {
        dispatch(deleteOneOrders(id));
    }

    return (
        <div className={`shop-cart ${cartOpen ? 'active' : ''}`}>
            {
                arrOrders.map(el => {
                    return (
                        <div key={el.id} className="cart-item">
                            <div className="cart-item-rigth">
                                <img src={`./img/${el.img}`} alt="img" />
                                <h2>{el.title}</h2>
                                <b>{`${el.desc.substring(0, 50)}...`}</b>
                            </div>
                            <div className="cart-item-left">
                                <FaTrashAlt
                                    onClick={() => deleteCart(el.id)}
                                    className={`shop-cart-button`}
                                />
                                <p>{el.price} $</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
