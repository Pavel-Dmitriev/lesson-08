import { App } from '../../types/app'
import { Auth } from '../../types/auth'
import { Thunk } from '../../types/base'
import { AppAction } from './appAction'
import { Action as ActionRedux } from 'redux'
import {User} from "../../types/user";

export declare namespace AppState {
  interface State {
    readonly loading: boolean;
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly errorText: string;
    readonly user: User.Data | null;
  }

  namespace Action {
    type Fetch = ActionRedux<AppAction.Fetch> & { payload?: undefined }
    type FetchSuccess = ActionRedux<AppAction.FetchSuccess> & { payload: App.Token }
    type FetchError = ActionRedux<AppAction.FetchError> & { payload: string }
    type FetchRegisterSuccess = ActionRedux<AppAction.FetchRegisterSuccess> & {payload: User.Data}

    type All = Fetch | FetchSuccess | FetchError | FetchRegisterSuccess
  }

  interface ActionThunk {
    appLogin: Thunk<Auth.Login.Params>,
    appReg: Thunk<User.Create.Param>
  }
}
