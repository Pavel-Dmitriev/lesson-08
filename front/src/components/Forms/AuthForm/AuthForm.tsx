import block from 'bem-cn'
import React from "react";

const b = block('auth-form')


const AuthFormPresenter: React.FC<Props> = ({loading, errorText, applogin})  => {


  return (
    <form action="/" className={b()}>
      <div className={b('container')}>
        <h2>Авторизация</h2>

        <input type='password' name='password' placeholder='Пароль' required className={b('password')}/>
        <button type='submit' className={b('btn')}>Отправить</button>
      </div>
    </form>
  )
}

export default AuthFormPresenter
