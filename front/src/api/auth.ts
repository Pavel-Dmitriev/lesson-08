import axios from 'axios'
import {Auth} from "../types/auth";
import {App} from "../types/app";

export const apiAuthLogin = async (params: Auth.Login.Params): Promise<App.Token> => {
  const {data} = await axios.post<App.Token>('/api/v1/auth/login', params)
  return data
}

export const apiAuthRefresh = async (params: Auth.Refresh.Params): Promise<App.Token> => {
  const {data} = await axios.post<App.Token>('/api/v1/auth/refresh', params)
  return data
}
