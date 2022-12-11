import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const installmentCardsApi = createApi({
	reducerPath: 'installmentCardsApi',
	tagTypes: ['InstallmentCards'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		getInstallmentCards: build.query({
			query: (limit = '') => `installment-cards?${limit && `_limit=${limit}`}`,

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

export const {useGetInstallmentCardsQuery, useAddProductMutation, useDeleteProductMutation} = installmentCardsApi;