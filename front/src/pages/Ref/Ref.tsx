import block from 'bem-cn'
import React from 'react'
import './Ref.css'

interface Props {
}

const b = block('ref')

export const Ref: React.FC<Props> = () => {
  return (
    <nav className={b()}>
      <ul className={b('list')}>
        <li><a href="/ref/authors">Авторы</a></li>
        <li><a href="/ref/genre">Жанр</a></li>
        <li><a href="/ref/language">Язык</a></li>
        <li><a href="/ref/publisher">Издатель</a></li>
      </ul>
    </nav>
  )
}
