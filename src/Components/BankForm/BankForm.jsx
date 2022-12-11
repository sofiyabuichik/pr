import React, {useState} from 'react';
import {Button} from "@mui/material";
import BankCardForm from "../BankCardForm/BankCardForm";

function BankForm({bank}) {
	const [isActiveCard, setIsActiveCard] = useState(false)

	return (
		<div className="bank_block" id={bank.id} key={bank.id || Date.now()}>
			<div className="bank_main_wrapper">
				<div className="image_block">
					<img src={bank.image} alt=""/>
				</div>
				<div className="info_block">
					<h3>{bank.name}</h3>
					<p align={"right"}>{bank.description}</p>

				</div>
			</div>
			<Button variant="text" onClick={() => setIsActiveCard(!isActiveCard)}>Подробнее</Button>
			<div className="content_block">
				{isActiveCard && <BankCardForm bankid={bank.id} title={"Кэшбэк карты"}/> }
				{isActiveCard && <BankCardForm bankid={bank.id} title={"Карты рассрочки"}/> }
			</div>
		</div>
	);
}

export default BankForm;