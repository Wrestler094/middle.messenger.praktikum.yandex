import { type Block, renderDOM } from 'core'

export default class Route {
  private _pathname: string
  private readonly _blockClass: { prototype: Block }
  private readonly _props: Record<string, any>
  private _block: any

  constructor (pathname: string, view: { prototype: Block }, props: Record<string, any>) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate (pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave (): void {
    this._block = null
  }

  match (pathname: string): boolean {
    return pathname === this._pathname
  }

  isProtect (): boolean {
    return this._props.isProtect
  }

  render (): void {
    if (this._block == null) {
      // @ts-expect-error TS2351: This expression is not constructable.
      this._block = new this._blockClass()
      renderDOM(this._props.rootQuery, this._block)
    }
  }
}
