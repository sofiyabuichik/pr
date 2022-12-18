import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const installmentCardsApi = createApi({
	reducerPath: 'installmentCardsApi',
	tagTypes: ['InstallmentCards'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		getInstallmentCards: build.query({
			query: (limit = '') => `installment-cards?${limit && `_limit=${limit}`}`,

		}),
		getInstallmentCardsByBankId: build.query({
			query: (bankid) => `installment-cards?${bankid && `bankid=${bankid}`}`,
		}),
		getInstallmentCardByName: build.query({
			query: (name = '') => `installment-cards?name=${name}`

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

export const {useGetInstallmentCardsQuery, useGetInstallmentCardByNameQuery, useGetInstallmentCardsByBankIdQuery, useAddProductMutation, useDeleteProductMutation} = installmentCardsApi;