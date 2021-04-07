import block from 'bem-cn'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BaseComponentProps } from '../../types/base'
import './Header.css'

interface Props extends BaseComponentProps {
  right?: () => ReactNode
}

const b = block('header')

export const Header: React.FC<Props> = ({ className = '', right }) => (
  <header className={b({}).mix(className)}>
    <Link
      className={b('title')}
      to={'/'}
    >
      Catalog
    </Link>
    {!!right && right()}
  </header>
)
