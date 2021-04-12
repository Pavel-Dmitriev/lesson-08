import block from 'bem-cn'
import React, {ReactNode} from 'react'
import './Header.css'
import {BaseComponentProps} from "../../types/base";
import {Link} from "react-router-dom";

interface Props extends BaseComponentProps{
  right?: ()  => ReactNode
}

const b = block('header')

export const Header: React.FC<Props> = ({className= '', right}) => (
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
