import block from 'bem-cn'
import React, {useCallback} from 'react'
import {Header} from '../../components/Header/Header'
import {MainMenu} from '../../components/MainMenu/MainMenu'
import './MainLayout.css'
import {AppState} from "../../store/app/types";
import {Button} from "../../components/Button/Button";
import {ButtonType} from "../../components/Button/ButtonType";
import {appActions} from "../../store/app/actions";
import {connect, MapDispatchToProps} from "react-redux";

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps {

}

type Props = OwnProps & DispatchProps

const b = block('main-layout')

const MainLayoutPresenter: React.FC<Props> = ({children, clear}) => {
  const right = useCallback(() => (
    <Button
      type={ButtonType.Primary}
      onClick={() => clear()}
    >
      Выход
    </Button>
  ), [])

  return (
    <div className={b()}>
      <Header right={right}/>
      <MainMenu/>
      <main className={b('main')}>
        {children}
      </main>
    </div>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {...appActions}

export const MainLayout = connect(null, mapDispatchToProps)(MainLayoutPresenter)
