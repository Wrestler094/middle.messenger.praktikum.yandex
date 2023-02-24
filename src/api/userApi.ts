import { HTTPTransport } from 'core'

export const userApi = {
  editProfile: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.put('user/profile', data)
  },

  editPassword: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.put('user/password', data)
  },

  changeAvatar: async function (data: FormData): Promise<any> {
    return await HTTPTransport.put('user/profile/avatar', data)
  },

  getUser: async function (id: number): Promise<any> {
    return await HTTPTransport.get(`user/${id}`)
  },

  searchUser: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('user/profile', data)
  }
}
