<<<<<<< HEAD
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store/types";

=======
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/types'
>>>>>>> master

export interface BaseComponentProps {
  className?: string;
}

export type Thunk<T = void> = (params: T) => ThunkAction<Promise<void> | void, RootState.State, {}, any> | void
