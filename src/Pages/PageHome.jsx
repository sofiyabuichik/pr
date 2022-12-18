import React from 'react';

import CashbackCard from '../Components/ChashbackCard/ChashbackCard';
import HomeTextBlock from '../Components/HomeTextBlock/HomeTextBlock';
import InstallmentCards from '../Components/InstallmentCards/InstallmentCards';
import LargestBanks from '../Components/LargestBanks/LargestBanks';

export default function PageHome() {

  return (
    <div>
      {/*HomeTextBlock*/}
      <HomeTextBlock/>
      {/*the largest banks*/}
      <LargestBanks/>
      {/*/!*PageCashback Card *!/*/}
      <CashbackCard/>
      {/*/!*Installment Cards*!/*/}
      <InstallmentCards/>
    </div>
  )
}
