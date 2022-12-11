import React from 'react';
import {useGetCashbackCardsByBankIdQuery} from "../../redux/cashbackCardApi";
import Slider from "../Slider/Slider";

function BankCardForm({ bankid = 1, title = "карты", path = 'none', getApi = useGetCashbackCardsByBankIdQuery}) {
	const {data = [], isLoading = false} = getApi(bankid)

	return (
		<div className="cashback_content">
			<h1>{title}</h1>
			{
				isLoading &&
				<div className="spinner-border" role="status">
					<span className="sr-only"></span>
				</div>
			}
			{
				data.length > 0 ? <Slider array={data} path={path}/> : <p>нет карт</p>
			}

		</div>
	);
}

export default BankCardForm;