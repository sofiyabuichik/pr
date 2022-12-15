import React from 'react';
import {useGetCashbackCardByIdQuery} from "../../redux/cashbackCardApi";

function CardForm({id = 234561}) {
	const {data = [], isLoading = false} = useGetCashbackCardByIdQuery(id)
	return (
		<div className="card_form" id={data.id} key={data.id || Date.now()}>
			{
				isLoading &&
				<div className="spinner-border" role="status">
					<span className="sr-only"></span>
				</div>
			}
			<div className="bank_main_wrapper">
				<div className="image_block">
					<img src={data.image} alt=""/>
				</div>
				<div className="info_block">
					<h3>{data.name}</h3>
					<p align={"left"}>{data.description}</p>

				</div>
			</div>
		</div>
	);
}

export default CardForm;