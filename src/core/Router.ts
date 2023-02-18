import Route from 'core/Route'
import Block from 'core/Block'

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

  use (pathname: string, block: Function & { prototype: Block }): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

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

  _onRoute (pathname: string): void {
    const route = this.getRoute(pathname)

    if (route == null) {
      return
    }

    if ((this._currentRoute != null) && this._currentRoute !== route) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
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
