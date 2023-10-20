import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { storeShopApi } from './services/storeShop'
import cartReducer from './feature/cartSlice'
import printReducer from './feature/printSlice'
import { getTotals } from './feature/cartSlice'
import { getTotalsPrint } from './feature/printSlice'



export const store = configureStore({
    reducer: {
        [storeShopApi.reducerPath]: storeShopApi.reducer,
        cart: cartReducer,
        print: printReducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storeShopApi.middleware),
})

store.dispatch(getTotals());
store.dispatch(getTotalsPrint());


setupListeners(store.dispatch)