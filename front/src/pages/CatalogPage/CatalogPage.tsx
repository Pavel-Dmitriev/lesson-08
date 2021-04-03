import block from 'bem-cn'
import React from 'react'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'
import './CatalogPage.css'

interface Props {
}

const b = block('catalog-page')

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Каталог
      <ToggleButton />
    </div>
  )
}
