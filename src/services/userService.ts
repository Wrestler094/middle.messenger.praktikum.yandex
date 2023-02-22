import { Router, Store } from 'core'
import { userApi } from 'api/userApi'

export const userService = {
  editProfile: async function (data: Record<string, any>) {
    try {
      // Show Loader
      const user = await userApi.editProfile(data)
      Store.dispatch({ user })
      Router.go('/settings')
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  editPassword: async function (data: Record<string, any>) {
    try {
      // Show Loader
      await userApi.editPassword(data)
      Router.go('/settings')
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  changeAvatar: async function (data: Record<string, any>) {
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

  getUser: async function (id: number) {
    try {
      // Show Loader
      console.log(id)
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  searchUser: async function (data: Record<string, any>) {
    try {
      // Show Loader
      console.log(data)
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  }
}
