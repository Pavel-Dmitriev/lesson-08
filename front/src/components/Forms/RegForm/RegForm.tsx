import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { appActions } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import './RegForm.css'
import {User} from "../../../types/user";

const b = block('reg-form')

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps {
}

type Props = OwnProps & StateProps & DispatchProps


const schema: Yup.SchemaOf<User.Create.Param> = Yup.object().shape(({
  login: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

const RegFormPresenter: React.FC<Props> = ({ loading, errorText, appReg }) => {
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Param>({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appReg(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b()}>
      <h2 className={b('title')}>Регистрация</h2>
      <Input
        className={b('field')}
        label={'Логин'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Почта'}
        name={'Email'}
        htmlType={InputType.Email}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Пароль'}
        name={'Password'}
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
      <div>
        <Button text={'Регистрация'} onClick={handlerSubmit} disabled={loading} />
        {/*<Button text={'Войти'} onClick={handlerSubmit} disabled={loading} />*/}
      </div>
    </form>
  )
}


const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const RegForm = connect(mapStateToProps, mapDispatchToProp)(RegFormPresenter)

