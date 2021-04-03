<<<<<<< HEAD
import {AppState} from "./types";
import {AppAction} from "./appAction";
import {App} from "../../types/app";
import {apiAuthLogin} from "../../api/auth";
=======
import { apiAuthLogin } from '../../api/auth'
import { browserHistory } from '../../browserHistory'
import { App } from '../../types/app'
import { AppAction } from './appAction'
import { AppState } from './types'
>>>>>>> master

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

export const appActions: AppState.ActionThunk = {
  appLogin: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const tokenPair = await apiAuthLogin(params)
      dispatch(appFetchSuccess(tokenPair))
<<<<<<< HEAD
=======
      browserHistory.push('/')
>>>>>>> master
    } catch (err) {
      dispatch(appFetchError('Ошибка авторизации.'))
    }
  }
}
