import block from 'bem-cn'
import React, { MouseEventHandler } from 'react'
import { BaseComponentProps } from '../../types/base'
import { emptyFunction } from '../../utils'
import './Button.css'

interface Props extends BaseComponentProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  htmlType?: 'submit' | 'reset' | 'button'
}

const b = block('button')

export const Button: React.FC<Props> = ({
  className = '',
  text,
  onClick = emptyFunction,
  disabled = false,
  htmlType = 'button'
}) => {
  return (
    <button
      className={b({}).mix(className)}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      <span>{text}</span>
    </button>
  )
}
