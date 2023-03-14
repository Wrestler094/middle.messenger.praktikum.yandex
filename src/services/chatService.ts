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

  createChat: async function (
    data: Record<string, any>,
    ctx: Record<string, any>,
    userInput: HTMLInputElement
  ) {
    try {
      // Show Loader
      await chatApi.createChat(data)
      ctx.hide()
      userInput.value = ''
      await this.getChats()
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  deleteChat: async function (data: Record<string, any>) {
    try {
      // Show Loader
      const response = await chatApi.deleteChat(data)
      // @ts-expect-error TS2339
      const chats = Store.getState().chats.filter((chat) => {
        return chat.id !== response.result.id
      })

      Store.dispatch({
        chats,
        activeChatId: null
      })
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
      ctx.hide()
      userInput.value = ''
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  getChatToken: async function (id: number, data: Record<string, never>) {
    try {
      // Show Loader
      return await chatApi.getChatToken(id, data)
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  }
}
