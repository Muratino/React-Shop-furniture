import { configureStore } from '@reduxjs/toolkit';
import fetchItems from './Slice/fetchItems';

export const store = configureStore({
    reducer: {  
     fetchItems,
    },

})