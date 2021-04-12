import block from 'bem-cn'
import { useFormik } from 'formik'
import React, {MouseEventHandler, useState} from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { appActions } from '../../../store/app/actions'
import { RootState } from '../../../store/types'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import './RegForm.css'
import {User} from "../../../types/user";
import {BaseComponentProps} from "../../../types/base";
import {apiUserCreate} from "../../../api/user";
import {browserHistory} from "../../../browserHistory";
import {ButtonType} from "../../Button/ButtonType";

const b = block('reg-form')


interface Props extends BaseComponentProps {
}



const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape(({
  login: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Невалидный email').required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
  passwordConfirm: Yup.string().required('Обязательное поле').test(
    'match',
    'Поля не совпадают',
    (value, context) => value === context.parent.password
  )
}))

export const RegForm: React.FC<Props> = ({className = ''}) => {
  const [ loading, setLoading ] =useState<boolean>(false)
  const [ errorText, setErrorText ] =useState<string>('')
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Params>({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
      setLoading(true)
      await apiUserCreate(fields)
        browserHistory.push('/auth')
      } catch (err) {
        setErrorText(err.message)
      } finally {
        setLoading(false)
      }
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b({}).mix(className)}>
      <h2 className={b('title')}>Регистрация</h2>
      <Input
        className={b('field')}
        label={'Имя'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Почта'}
        name={'email'}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Пароль'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Подтвердите пароль'}
        name={'passwordConfirm'}
        htmlType={InputType.Password}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      <div className={b('buttons')}>
        <Button
          onClick={handlerSubmit}
          disabled={loading}
          type={ButtonType.Primary}
        >
        Регистрация
        </Button>
      </div>
    </form>
  )
}


// const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
//   loading: app.loading,
//   errorText: app.errorText
// })
//
// const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }
//
// export const RegForm = connect(mapStateToProps, mapDispatchToProp)(RegFormPresenter)

