import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import ChashbackCard from '../Components/ChashbackCard/ChashbackCard';
import Footer from '../Components/Foter/Footer';
import HomeTextBlock from '../Components/HomeTextBlock/HomeTextBlock';
import InstallmentCards from '../Components/InstallmentCards/InstallmentCards';
import LargestBanks from '../Components/LargestBanks/LargestBanks';

export default class Home extends Component {
    render(){
        return (
            <div>
                {/*HomeTextBlock*/}
                <HomeTextBlock/>
                {/*the largest banks*/}
                <LargestBanks banksArray={['Первый','Второй','Четвертый', 'Пятый', 'Третий','Шестой']}/>
                {/*Chashback Card */}
                <ChashbackCard ChashbackCardArray = {[1,1,1,1]}/>
                {/*Installment Cards*/}
                <InstallmentCards InstallmentCardsArray = {[1,1,1]}/>
                {/*Foter*/}
                <Footer/>
            </div>
        )
    }
}