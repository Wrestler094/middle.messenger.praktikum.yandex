import { HTTPTransport } from 'core'

export const chatApi = {
  getChats: async function (): Promise<any> {
    return await HTTPTransport.get('chats')
  },

  createChat: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('chats', data)
  },

  deleteChat: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.delete('chats', data)
  },

  getChatFiles: async function (id: number): Promise<any> {
    return await HTTPTransport.get(`chats/${id}/files`)
  },

  getArchivedChats: async function (): Promise<any> {
    return await HTTPTransport.get('chats/archive')
  },

  archiveChat: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('chats/archive', data)
  },

  unarchiveChat: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('chats/unarchive', data)
  },

  getCommonChats: async function (id: number): Promise<any> {
    return await HTTPTransport.get(`chats/${id}/common`)
  },

  getChatUsers: async function (id: number): Promise<any> {
    return await HTTPTransport.get(`chats/${id}/users`)
  },

  getNewMessagesCount: async function (id: number): Promise<any> {
    return await HTTPTransport.get(`chats/new/${id}`)
  },

  uploadChatAvatar: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.put('chats/avatar', data)
  },

  addChatUsers: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.put('chats', data)
  },

  deleteChatUsers: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.delete('chats', data)
  },

  // Request token to connect to messages server
  getChatToken: async function (data: Record<string, any>): Promise<any> {
    return await HTTPTransport.post('chats', data)
  }
}
