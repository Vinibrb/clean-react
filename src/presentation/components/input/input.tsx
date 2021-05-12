import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import { FormContext } from '@/presentation/contexts'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(FormContext)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  return (
    <div
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
      data-testid={`${props.name}-wrap`}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
      />
      <label
        onClick={() => { inputRef.current.focus() }}
        data-testid={`${props.name}-label`}
        title={error}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
