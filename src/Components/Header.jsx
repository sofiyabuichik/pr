import React from 'react'
import { Link} from 'react-router-dom'
import SearchBlock from "./SearchBlock/SearchBlock";
import {useGetInstallmentCardByNameQuery} from "../redux/installmentCardApi";
import {useGetBanksByApiQuery} from "../redux/banksApi";
import {
  useGetCashbackCardByNameQuery
} from "../redux/cashbackCardApi";


export default function Header() {

  const [searchString, setSearchString] = React.useState('')
  return (
    <>
        <div className="header">
            <div className='nav__image_logo'>
                <img src='logo.png' alt={"logo"}></img>
            </div>
            <ul className='ul-links'>
                <Link to="/" children="Главная"/>   
                <Link to="/banks" children="Банки"/>
                <Link to="/cashback" children="Кэшбэк карты"/>
                <Link to="/installment" children="Карта рассрочки"/>
            </ul>
            <div className="nav__search_container">
                <input value={searchString} className='nav_input_search' type="text" placeholder="Поиск по названию..." onChange={(e) => setSearchString(e.target.value)}/>
              {
                searchString.trim() !== '' &&
                <SearchBlock
                  setSearchString={setSearchString}
                  searchValue={searchString}
                  querySelectorsArray={
                    [
                      {selector: useGetBanksByApiQuery, name: "Банки", path: "banks"},
                      {selector: useGetCashbackCardByNameQuery, name: "Кэшбэк карты", path: "cashback"},
                      {selector: useGetInstallmentCardByNameQuery, name: "Карта рассрочки", path: "installment"},
                    ]
                }
                />
              }
            </div>
        </div>
           
                    
    </>
  )
}
