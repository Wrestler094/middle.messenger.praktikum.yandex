import { Router } from 'core'
import { authService } from './authService'

export async function initAppService (): Promise<void> {
  const currentRoute = Router.getRoute(window.location.pathname)

  try {
    await authService.user()

    if (((currentRoute?.match('/')) === true) ||
        ((currentRoute?.match('/sign-up')) === true)) {
      Router.go('/messenger')
    }
  } catch (err) {
    console.error(err)
  } finally {
    Router.start()
  }
}
