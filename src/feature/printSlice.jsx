import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartPrint: localStorage.getItem('cartPrint') ? JSON.parse(localStorage.getItem("cartPrint")) : [],
    cartPrintTotalQuantity: 0,
    cartPrintTotalAmount: 0,
};


export const printSlice = createSlice({
    name: 'print',
    initialState,
    reducers: {
        addPrintItem: (state, action) => {
            const PrintIndex = state.cartPrint.findIndex((e) => e.id === action.payload.id)
            if (PrintIndex >= 0) {
                state.cartPrint[PrintIndex].printItemQuantity += 1
            }
            else {
                const tempItem = { ...action.payload, printItemQuantity: 1 }
                state.cartPrint.push(tempItem);
            }
            localStorage.setItem('cartPrint', JSON.stringify(state.cartPrint))
        },
        removePrintFromCart(state, action) {
            const nextPrintCartItems = state.cartPrint.filter(
                e => e.id !== action.payload.id
            )
            state.cartPrint = nextPrintCartItems;
            localStorage.setItem("cartPrint", JSON.stringify(state.cartPrint))
        },

        decreasePrintCartItem(state, action) {
            const itemIndex = state.cartPrint.findIndex(
                e => e.id === action.payload.id
            )
            if (state.cartPrint[itemIndex].printItemQuantity > 1) {
                state.cartPrint[itemIndex].printItemQuantity -= 1

            } else if (state.cartPrint[itemIndex].printItemQuantity === 1) {
                const nextCartItems = state.cartPrint.filter(
                    e => e.id !== action.payload.id
                )
                state.cartPrint = nextCartItems;
            }
            localStorage.setItem("cartPrint", JSON.stringify(state.cartPrint))
        },

        getTotalsPrint(state, action) {
            let { total, quantity } = state.cartPrint.reduce(
                (cartTotal, cartItem) => {
                    const { price, printItemQuantity } = cartItem;
                    const itemTotal = price * printItemQuantity;

                    cartTotal.total += itemTotal
                    cartTotal.quantity += printItemQuantity

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartPrintTotalQuantity = quantity;
            state.cartPrintTotalAmount = total;
        },


        clearCardPrint(state, action) {
            state.cartPrint = []
            localStorage.setItem("cartPrint", JSON.stringify(state.cartPrint))
        },
    },
})


export const { addPrintItem, clearCardPrint, removePrintFromCart, decreasePrintCartItem, getTotalsPrint } = printSlice.actions;
export default printSlice.reducer;