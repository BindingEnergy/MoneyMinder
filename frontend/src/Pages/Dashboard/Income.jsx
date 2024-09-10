import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../../Components/form/Form'
import IncomeItem from '../../Components/IncomeItem/IncomeItem'


function Income() {
  const {addIncome,incomes,getIncome} = useGlobalContext()

  useEffect(() => {
    getIncome()
  },[])
  return (
    <IncomeStyled>
      <h1 className='md:text-5xl text-3xl font-bold font-[Poppins]'>Incomes</h1>
      <div className="income-content">
        <div className="form-container">
            <Form/>
        </div>
        <div className="incomes">
            {incomes.map((income)=>{
              const {_id , title , amount , date , category , description} = income;
              return <IncomeItem
                key = {_id}
                id = {_id}
                title = {title}
                description={description}
                amoumt={amount} date={date}
                category={category}
              />
            })}
        </div>
      </div>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`

export default Income
