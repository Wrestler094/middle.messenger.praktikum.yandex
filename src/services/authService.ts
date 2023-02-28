import { Router, Store } from 'core'
import { authApi } from 'api/authApi'

export const authService = {
  login: async function (data: Record<string, any>) {
    try {
      // Show Loader
      await authApi.login(data)
      await authService.user()
      Router.go('/messenger')
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  register: async function (data: Record<string, any>) {
    try {
      // Show Loader
      await authApi.register(data)
      await authService.user()
      Router.go('/messenger')
    } catch (err) {
      // Show Error
      console.log(err)
    } finally {
      // Hide Loader
    }
  },

  user: async function () {
    const user = await authApi.user()
    Store.dispatch({ user })
  },

  logout: async function () {
    try {
      // Show Loader
      await authApi.logout()
      Store.dispatch({ user: null })
      Router.go('/')
    } catch (err) {
      console.error(err)
    } finally {
      // Hide Loader
    }
  }
}
