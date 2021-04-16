import React, { useState, useEffect } from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name)
    })
  }, [state.name])

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <FormContext.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
