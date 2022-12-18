import React, {useState} from 'react';
import {Button, Skeleton} from "@mui/material";
import BankCardForm from "../BankCardForm/BankCardForm";
import {useGetCashbackCardsByBankIdQuery} from "../../redux/cashbackCardApi";
import {useGetInstallmentCardsByBankIdQuery} from "../../redux/installmentCardApi";
import { useInView } from 'react-intersection-observer';

function BankForm({bank}) {
	const [isActiveCard, setIsActiveCard] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className="bank_block" id={bank.id} key={bank.id || Date.now()}>
			<div className="bank_main_wrapper">
				<div className="image_block" ref={ref}>
					{
						inView ? <img src={bank.image} alt=""/> : <Skeleton variant="rectangular" width={300} height={300} />

					}
				</div>
				<div className="info_block">
					<h3>{bank.name}</h3>
					<p align={"left"}>{bank.description}</p>

				</div>
			</div>
			<Button sx={{color: "white"}} variant="text" onClick={() => setIsActiveCard(!isActiveCard)}>{!isActiveCard ? "Подробнее" : "Свернуть"}</Button>
			<div className="content_block">
				{isActiveCard && <BankCardForm bankid={bank.id} title={"Кэшбэк карты"} path={"cashback"} getApi={useGetCashbackCardsByBankIdQuery}/> }
				{isActiveCard && <BankCardForm bankid={bank.id} title={"Карты рассрочки"} path={"installment"} getApi={useGetInstallmentCardsByBankIdQuery}/> }
			</div>
		</div>
	);
}

export default BankForm;