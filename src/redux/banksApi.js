import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const banksApi = createApi({
	reducerPath: 'banksApi',
	tagTypes: ['Banks'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		getBanks: build.query({
			query: (limit = '') => `banks?${limit && `_limit=${limit}`}`,

		}),
		// addProduct: build.mutation({
		// 	query: (body) => ({
		// 		url: 'banks',
		// 		method: 'POST',
		// 		body,
		// 	}),
		// 	invalidatesTags: [{type: 'Products', id: 'LIST'}]
		// }),
		// deleteProduct: build.mutation({
		// 	query: (id) => ({
		// 		url: `banks/${id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: [{type: 'Products', id: 'LIST'}]
		// })
	})
});

export const {useGetBanksQuery, useAddProductMutation, useDeleteProductMutation} = banksApi;