import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const banksApi = createApi({
	reducerPath: 'banksApi',
	tagTypes: ['Banks'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
	endpoints: (build) => ({
		getBanks: build.query({
			query: (limit = '') => `banks?${limit && `_limit=${limit}`}`,

		}),
		getBanksByApi: build.query({
			query: (name = '') => `banks?name_like=^${name}`
		}),

	})
});

export const {useGetBanksQuery, useGetBanksByApiQuery, useAddProductMutation, useDeleteProductMutation} = banksApi;