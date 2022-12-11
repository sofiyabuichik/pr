import React from 'react';

import CashbackCard from '../Components/ChashbackCard/ChashbackCard';
import Footer from '../Components/Footer/Footer';
import HomeTextBlock from '../Components/HomeTextBlock/HomeTextBlock';
import InstallmentCards from '../Components/InstallmentCards/InstallmentCards';
import LargestBanks from '../Components/LargestBanks/LargestBanks';

export default function Home() {

  return (
    <div>
      {/*HomeTextBlock*/}
      <HomeTextBlock/>
      {/*the largest banks*/}
      <LargestBanks/>
      {/*/!*Cashback Card *!/*/}
      <CashbackCard/>
      {/*/!*Installment Cards*!/*/}
      <InstallmentCards/>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}
