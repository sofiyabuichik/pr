import React from 'react';
import {useGetCashbackCardsByBankIdQuery} from "../../redux/cashbackCardApi";
import Slider from "../Slider/Slider";

function BankCardForm({ bankid = 1, title = "карты"}) {
	const {data = [], isLoading = false} = useGetCashbackCardsByBankIdQuery(bankid)

	if (isLoading) return (
		<div className="spinner-border" role="status">
			<span className="sr-only">Loading...</span>
		</div>
	)
	return (
		<div className="cashback_content">
			<h1>{title}</h1>
			{
				data.length > 0 ? <Slider array={data} path={"banks"}/> : <p>нет карт</p>
			}

		</div>
	);
}

export default BankCardForm;