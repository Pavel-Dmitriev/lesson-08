import block from 'bem-cn'
import React from 'react'
import { Header } from '../../components/Header/Header'
import { MainMenu } from '../../components/MainMenu/MainMenu'
import './MainLayout.css'

interface Props {
}

const b = block('main-layout')

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={b()}>
      <Header />
      <MainMenu />
      <main className={b('main')}>
        {children}
      </main>
    </div>
  )
}
