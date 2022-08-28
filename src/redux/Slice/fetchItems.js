import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    arrOrders: [],
    cartOpen: false,
    categoriesItem: 'all'
}

export const fetchItems = createSlice({
    name: 'fetchItems',
    initialState,
    reducers: {
        setArrOrders(state, action) {
            state.arrOrders.push(action.payload);
        },
        deleteOneOrders(state, action) { 
            state.arrOrders = state.arrOrders.filter(item => item.id !== action.payload)

        },
        setCartOpen(state) {
            state.cartOpen = !state.cartOpen;
        },
        setCategoriesItem(state, action) {
            state.categoriesItem = action.payload;
        },
        setItems(state, action) {
            state.items = action.payload;
        },
    },
})
export const { setItems, setArrOrders, deleteOneOrders, setCartOpen, setCategoriesItem } = fetchItems.actions;



export default fetchItems.reducer;