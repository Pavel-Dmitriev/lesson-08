
import { apiAuthLogin } from '../../api/auth'
import { browserHistory } from '../../browserHistory'
import { App } from '../../types/app'
import { AppAction } from './appAction'
import { AppState } from './types'
import {apiUserCreate} from "../../api/user";
import {User} from "../../types/user";


const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch
})

const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload
})

const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload
})
const appFetchRegisterSuccess = (payload: User.Data): AppState.Action.FetchRegisterSuccess => ({
  type: AppAction.FetchRegisterSuccess,
  payload
})

export const appActions: AppState.ActionThunk = {
  appLogin: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const tokenPair = await apiAuthLogin(params)
      dispatch(appFetchSuccess(tokenPair))
      browserHistory.push('/')
    } catch (err) {
      dispatch(appFetchError('Ошибка авторизации.'))
    }
  },
  appReg: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const user = await apiUserCreate(params)
      dispatch(appFetchRegisterSuccess(user))
      browserHistory.push('/auth')
    } catch (err) {
      dispatch(appFetchError('Ошибка регистрации.'))
    }
  }
}

