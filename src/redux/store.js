import { configureStore } from '@reduxjs/toolkit';
import { banksApi } from './banksApi';
import { cashbackCardsApi } from './cashbackCardApi';
import {installmentCardsApi} from "./installmentCardApi";

export const store = configureStore({
	reducer: {
		[banksApi.reducerPath]: banksApi.reducer,
		[cashbackCardsApi.reducerPath]: cashbackCardsApi.reducer,
		[installmentCardsApi.reducerPath]: installmentCardsApi.reducer,
	},
	middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(banksApi.middleware).concat(cashbackCardsApi.middleware).concat(installmentCardsApi.middleware)
});