import block from 'bem-cn'
import React from 'react'
import { RegistrationForm } from '../../components/Forms/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

interface Props {
}

const b = block('registration-page')

export const RegistrationPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <RegistrationForm className={b('form')} />
    </div>
  )
}
