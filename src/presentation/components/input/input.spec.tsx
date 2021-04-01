import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Input from './input'
import { FormContext } from '@/presentation/contexts'

const makeSut = (): RenderResult => {
  return render(
    <FormContext.Provider value={{ state: {} }}>
      <Input name="field" />
    </FormContext.Provider>
  )
}

describe('Input Component', () => {
  test('Should Begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
