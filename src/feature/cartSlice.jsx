import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success('increased product quantity', {
                    position: 'top-right'
                })
            } else {
                const tempItem = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempItem);
                toast.success('added a new product to cart', {
                    position: 'top-right'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.success(`${action.payload.title} remove from cart`, {
                position: 'top-right'
            })
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.success(`decrease  ${action.payload.title}  cart quantity`, {
                    position: 'top-right'
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
                toast.info(`${action.payload.title} remove from cart`, {
                    position: 'top-right'
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        clearCard(state, action) {
            state.cartItems = []
            if (state.cartItems.cartQuantity > 1) {
                state.cartItems.cartQuantity = 0
            }
                toast.info(`All item remove from cart`, {
                    position: 'top-right'
                })
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        checkOut(state, action) {
            state.cartItems = []
                toast.success(`Checked out Thankyou!!`, {
                    position: 'top-center',
                })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    },
})


export const { addToCart, removeFromCart, decreaseCart, clearCard, getTotals, checkOut } = cartSlice.actions;

export default cartSlice.reducer;