import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import { ShopServers } from "../API/Fetch";
import { View } from "./View";
import { setItems } from '../../redux/Slice/fetchItems';


export const Content = () => {
    const { getAllFurniture, clearError, process, setProcess } = ShopServers();
    const dispatch = useDispatch();
    
    useEffect(() => {
        updateItems();
    }, []);

    const updateItems = () => {
        clearError();
        getAllFurniture()
            .then(el => {
                dispatch(setItems(el));
                setProcess("confirmed");
            })
            .catch((e) => console.log(e));
    };

    return (
        <main>
            <View />
        </main>
    );
};

