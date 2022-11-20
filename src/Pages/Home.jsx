import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import ChashbackCard from '../Components/ChashbackCard/ChashbackCard';
import Footer from '../Components/Foter/Footer';
import HomeTextBlock from '../Components/HomeTextBlock/HomeTextBlock';
import InstallmentCards from '../Components/InstallmentCards/InstallmentCards';
import LargestBanks from '../Components/LargestBanks/LargestBanks';

export default function Home() {

  const banks = [
    {
      name: 'БеларусБанк',
      description: 'Крупнейшій банк страны',
      image: '/img/belarusbank_logo.jpg',
      id: 1,
    },
    {
      name: 'Альфа Банк',
      description: 'Chash',
      image: '/img/alfa.png',
      id: 2,
    },
    {
      name: 'Банк 3',
      description: 'Chash',
      image: '/img/belarusbank_logo.jpg',
      id: 3,
    },
    {
      name: 'Альфа Банк',
      description: 'Chash',
      image: '/img/belarusbank_logo.jpg',
      id: 4,
    },
    {
      name: 'БеларусБанк',
      description: 'Chash',
      image: '/img/belarusbank_logo.jpg',
      id: 5,
    }
  ]

  return (
    <div>
      {/*HomeTextBlock*/}
      <HomeTextBlock/>
      {/*the largest banks*/}
      <LargestBanks banksArray={banks}/>
      {/*Chashback Card */}
      <ChashbackCard ChashbackCardArray = {banks}/>
      {/*Installment Cards*/}
      <InstallmentCards InstallmentCardsArray = {banks}/>
      {/*Foter*/}
      <Footer/>
    </div>
  )
}
