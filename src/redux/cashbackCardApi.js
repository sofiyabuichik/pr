import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cashbackCardsApi = createApi({
	reducerPath: 'cashbackCardsApi',
	tagTypes: ['CashbackCards'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		getCashbackCards: build.query({
			query: (limit = '') => `cashback-cards?${limit && `_limit=${limit}`}`,

		}),
		getCashbackCardsByBankId: build.query({
			query: (bankid) => `cashback-cards?${bankid && `bankid=${bankid}`}`,
		}),
		getCashbackCardById: build.query({
			query: (id = 0) => `cashback-cards/${id}`,
		}),
		getCashbackCardByName: build.query({
			query: (name = '') => `cashback-cards?name_like=${name}`

		}),
		// addProduct: build.mutation({
		// 	query: (body) => ({
		// 		url: 'cashback-cards',
		// 		method: 'POST',
		// 		body,
		// 	}),
		// 	invalidatesTags: [{type: 'Products', id: 'LIST'}]
		// }),
		// deleteProduct: build.mutation({
		// 	query: (id) => ({
		// 		url: `cashback-cards/${id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: [{type: 'Products', id: 'LIST'}]
		// })
	})
});

export const {useGetCashbackCardsQuery, useGetCashbackCardByNameQuery, useGetCashbackCardsByBankIdQuery, useGetCashbackCardByIdQuery, useAddProductMutation, useDeleteProductMutation} = cashbackCardsApi;