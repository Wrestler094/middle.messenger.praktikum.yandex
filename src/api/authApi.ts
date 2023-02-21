import { HTTPTransport } from 'core'

export const authApi = {
  register: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('auth/signup', data)
  },

  login: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('auth/signin', data)
  },

  user: async function (): Promise<any> {
    return await HTTPTransport.get('auth/user')
  },

  logout: async function (): Promise<any> {
    return await HTTPTransport.post('auth/logout')
  }
}
