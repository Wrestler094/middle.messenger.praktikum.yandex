import { Store } from 'core'
import { chatApi } from 'api/chatApi'

export const chatService = {
  getChats: async function () {
    try {
      // Show Loader
      const response = await chatApi.getChats()
      Store.dispatch({ chats: response })
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  createChat: async function (data: Record<string, any>) {
    try {
      // Show Loader
      console.log(data)
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  addChatUsers: async function (
    data: Record<string, any>,
    ctx: Record<string, any>,
    userInput: HTMLInputElement
  ) {
    try {
      // Show Loader
      await chatApi.addChatUsers(data)
      // ~ Что-то делать со стором
      ctx.hide()
      userInput.value = ''
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  deleteChatUsers: async function (
    data: Record<string, any>,
    ctx: Record<string, any>,
    userInput: HTMLInputElement
  ) {
    try {
      // Show Loader
      await chatApi.deleteChatUsers(data)
      // ~ Что-то делать со стором
      ctx.hide()
      userInput.value = ''
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  }
}
