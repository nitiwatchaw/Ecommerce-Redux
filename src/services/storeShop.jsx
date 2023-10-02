// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const storeShopApi = createApi({
    reducerPath: 'storeShopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllItemsShop: builder.query({
            query: () => `products`,
        }),
        getItem: builder.query({
            query: (id) => `products/${id}`,
        }),
        getJewelery: builder.query({
            query: () => `products/category/jewelery`,
        }),
        getElectronic: builder.query({
            query: () => `products/category/electronics`,
        }),
        getMenCloth: builder.query({
            query: () => `products/category/men's%20clothing`,
        }),
        getWomenCloth: builder.query({
            query: () => `products/category/women's%20clothing`,
        }),
        getAllCart: builder.query({
            query: () => `carts`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllItemsShopQuery,
    useGetItemQuery,
    useGetJeweleryQuery,
    useGetElectronicQuery,
    useGetMenClothQuery,
    useGetWomenClothQuery,
    useGetAllCartQuery } = storeShopApi