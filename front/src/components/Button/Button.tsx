import block from 'bem-cn'
import React, { MouseEventHandler } from 'react'
import { BaseComponentProps } from '../../types/base'
import { emptyFunction } from '../../utils'
import './Button.css'
import {ButtonType} from "./ButtonType";

interface Props extends BaseComponentProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  htmlType?: 'submit' | 'reset' | 'button',
  type?: ButtonType,
  loading?: boolean

}

const b = block('button')

export const Button: React.FC<Props> = ({
  className = '',
  children ,
  onClick = emptyFunction,
  disabled = false,
  htmlType = 'button',
  type= ButtonType.Default,
  loading= false
}) => {
  return (
    <button
      className={b({[type]: true}).mix(className)}
      onClick={onClick}
      disabled={disabled || loading}
      type={htmlType}
    >
      <span className={b('children')}>
        {children}
      </span>
    </button>
  )
}
