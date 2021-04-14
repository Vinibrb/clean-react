import { AccountModel } from '@/domain/models'

export type AddAccountParams = {
  email: string
  password: string
  passwordConfirmation: string
  name: string
}

export interface AddAccount {
  add: (params: AddAccountParams) => Promise<AccountModel>
}
