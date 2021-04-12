import block from 'bem-cn'
import {useFormik} from 'formik'
import React, {ChangeEventHandler, MouseEventHandler, useEffect, useRef} from 'react'
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import * as Yup from 'yup'
import {appActions} from '../../../store/app/actions'
import {AppState} from '../../../store/app/types'
import {RootState} from '../../../store/types'
import {Auth} from '../../../types/auth'
import {Button} from '../../Button/Button'
import {Input} from '../../Input/Input'
import {InputType} from '../../Input/InputType'
import './AuthForm.css'
import {browserHistory} from "../../../browserHistory";
import {ButtonType} from "../../Button/ButtonType";
import {BaseComponentProps} from "../../../types/base";

const b = block('auth-form')

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps extends BaseComponentProps{
}

type Props = OwnProps & StateProps & DispatchProps


const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape(({
  login: Yup.string().required(),
  password: Yup.string().required()
}))

const AuthFormPresenter: React.FC<Props> = ({className='', loading, errorText, appLogin, clearError}) => {
  const refLogin = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)
  const {errors, values, submitForm, handleChange} = useFormik<Auth.Login.Params>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields)
    }
  })

  const handlerFieldChange: ChangeEventHandler<HTMLInputElement> = event => {
    handleChange(event)
    clearError()
  }

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  useEffect(() => {
    refLogin?.current?.focus()
  }, [])

  return (
    <form className={b({}).mix(className)}>
      <h2 className={b('title')}>Авторизация</h2>
      <Input
        ref={refLogin}
        className={b('field')}
        label={'Имя'}
        name={'login'}
        value={values.login}
        onChange={handlerFieldChange}
        onPressEnter={() => refPassword?.current?.focus()}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        ref={refPassword}
        className={b('field')}
        label={'Пароль'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handlerFieldChange}
        error={errors?.password}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      <div className={b('buttons')}>
        <Button
          onClick={() => browserHistory.push('/registration')}
          type={ButtonType.Link}
        >
          Регистрация
        </Button>
        <Button
          onClick={handlerSubmit}
          loading={loading}
          type={ButtonType.Primary}
        >
          Войти
        </Button>
      </div>
    </form>
  )
}


const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({app}) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = {...appActions}

export const AuthForm = connect(mapStateToProps, mapDispatchToProp)(AuthFormPresenter)

