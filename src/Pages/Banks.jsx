import React from 'react';
import {useGetBanksQuery} from "../redux/banksApi";
import BankForm from "../Components/BankForm/BankForm";

function Banks() {

  const {data = [], isLoading = false} = useGetBanksQuery()

  if (isLoading) return (
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  )

    return (
      <section>
          <h1>Банки</h1>
          {
            data.map(bank => (
                <BankForm bank={bank}/>
              ))
          }
      </section>
    )
}

export default Banks;