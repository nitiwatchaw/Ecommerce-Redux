import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { storeShopApi } from './services/storeShop'
import cartReducer from './feature/cartSlice'
import { getTotals } from './feature/cartSlice'



export const store = configureStore({
    reducer: {
        [storeShopApi.reducerPath]: storeShopApi.reducer,
        cart: cartReducer,
    
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storeShopApi.middleware),
})

store.dispatch(getTotals())


setupListeners(store.dispatch)