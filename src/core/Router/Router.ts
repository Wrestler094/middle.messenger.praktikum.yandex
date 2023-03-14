import { Route, Store, type Block } from 'core'

class Router {
  private static __instance: Router
  private readonly _rootQuery = '#app'
  private _currentRoute: Route | null = null
  private readonly routes: Route[] = []
  private readonly history = window.history

  constructor () {
    if (Router.__instance !== undefined) {
      return Router.__instance
    }

    Router.__instance = this
  }

  use (pathname: string, block: { prototype: Block }, isProtect: boolean = false): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery, isProtect })

    this.routes.push(route)

    return this
  }

  start (): void {
    window.onpopstate = event => {
      const target = event.target as Window
      this._onRoute(target.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _isUserAuthenticated (): boolean {
    return !(Store.getState().user == null)
  }

  _onRoute (pathname: string): void {
    let route = this.getRoute(pathname)

    if (route == null) {
      route = this.getRoute('/404')
    }

    if (route?.isProtect() === true && !(this._isUserAuthenticated())) {
      this.go('/')
    } else {
      if ((this._currentRoute != null) && this._currentRoute !== route) {
        this._currentRoute.leave()
      }

      this._currentRoute = route as Route
      route?.render()
    }
  }

  go (pathname: string): void {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back (): void {
    this.history.back()
  }

  forward (): void {
    this.history.forward()
  }

  getRoute (pathname: string): Route | undefined {
    return this.routes.find(route => route.match(pathname))
  }
}

export default new Router()
