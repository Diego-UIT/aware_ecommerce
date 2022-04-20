import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items
}

const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const duplicate = findItem(state.value, newItem)

            // In case of adding the same product, increase the quantity
            if (duplicate.length > 0) {
                state.value = deleteItem(state.value, newItem)

                state.value = [...state.value, {
                    ...newItem,
                    id: duplicate[0].id,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            // In case of adding a new product
            } else {
                state.value = [...state.value, {
                    ...newItem,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)))
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload

            const item = findItem(state.value, itemUpdate)

            if (item.length > 0) {
                state.value = deleteItem(state.value, itemUpdate)

                state.value = [...state.value, {
                    ...itemUpdate,
                    id: item[0].id
                }]
                localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)))
            }
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.value = deleteItem(state.value, item)
            localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)))
        }
    }
})

const findItem = (arr, item) => arr.filter(e => e.slug === item.slug && e.color === item.color && e.size === item.size)

const deleteItem = (arr, item) => arr.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)

const sortItems = (arr) => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const { addItem, updateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;