import React, {useState} from 'react';
import {Button, Skeleton} from "@mui/material";
import BankCardForm from "../BankCardForm/BankCardForm";
import {useGetCashbackCardsByBankIdQuery} from "../../redux/cashbackCardApi";
import {useGetInstallmentCardsByBankIdQuery} from "../../redux/installmentCardApi";
import { useInView } from 'react-intersection-observer';

function CardForm({card}) {
	const [isActiveCard, setIsActiveCard] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className="bank_block" id={card.id} key={card.id || Date.now()}>
			<div className="bank_main_wrapper">
				<div className="image_block" ref={ref}>
					{
						inView ? <img src={card.image} alt=""/> : <Skeleton variant="rectangular" width={300} height={300} />

					}
				</div>
				<div className="info_block">
					<h3>{card.name}</h3>
					<p align={"left"}>{card.description}</p>
					<h3>Преимущества</h3>
					<ul>
						{
							card.bonus.map((i) => <li>{i.name}</li>)
						}
					</ul>

				</div>
			</div>
			<Button sx={{color: "white"}} variant="text" onClick={() => setIsActiveCard(!isActiveCard)}>{!isActiveCard ? "Подробнее" : "Свернуть"}</Button>
			<div className="content_block">

				{isActiveCard &&
					<>
						<h3>Подробные характеристики</h3>
						<ul>
							{
								card.bonus.map((i) => <li>{i.desc}</li>)
							}
						</ul>
					</>
				}
			</div>
		</div>
	);
}

export default CardForm;