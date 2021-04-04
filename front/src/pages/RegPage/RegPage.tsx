import block from 'bem-cn'
import React from 'react'
import './RegPage.css'
import {RegForm} from "../../components/Forms/RegForm/RegForm";

interface Props {
}

const b = block('reg-page')

export const RegPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Форма регистрации
      <RegForm />
    </div>
  )
}
