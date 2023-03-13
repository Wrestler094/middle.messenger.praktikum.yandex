import { EventBus } from 'core'
import { v4 as makeUUID } from 'uuid'
import * as Handlebars from 'handlebars'

type Events = Values<typeof Block.EVENTS>

export default abstract class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render'
  } as const

  static componentName: string

  public id = makeUUID()
  protected _element: Nullable<HTMLElement> = null
  protected readonly props: P
  protected children: Record<string, Block> = {}

  eventBus: () => EventBus<Events>

  protected state: any = {}
  public refs: Record<string, Block> = {}

  public constructor (props?: P) {
    const eventBus = new EventBus<Events>()

    // eslint-disable-next-line
    this.props = this._makePropsProxy(props || {} as P)
    this.state = this._makePropsProxy(this.state)

    this.eventBus = () => eventBus
    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT, this.props)
  }

  _registerEvents (eventBus: EventBus<Events>): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources (): void {
    this._element = this._createDocumentElement('div')
  }

  init (): void {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  _componentDidMount (props: P): void {
    // @ts-expect-error
    this.componentDidMount(props)
  }

  componentDidMount (): void {}

  _componentDidUpdate (oldProps: P, newProps: P): void {
    // @ts-expect-error
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate (): boolean {
    return true
  }

  _componentWillUnmount (): void {
    // this.eventBus().destroy()
    this.componentWillUnmount()
  }

  componentWillUnmount (): void {}

  setProps = (nextProps: P): void => {
    if (typeof nextProps === 'object') {
      Object.assign(this.props, nextProps)
    }
  }

  setState = (nextState: any): void => {
    if (typeof nextState === 'object') {
      Object.assign(this.state, nextState)
    }
  }

  get element (): Nullable<HTMLElement> {
    return this._element
  }

  _render (): void {
    const fragment = this._compile()

    this._removeEvents()
    const newElement = fragment.firstElementChild

    if (newElement != null) {
      this._element?.replaceWith(newElement)
    }

    this._element = newElement as HTMLElement
    this._addEvents()
  }

  protected render (): string {
    return ''
  };

  getContent (): HTMLElement {
    // Хак, чтобы вызвать CDM только после добавления в DOM
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM)
        }
      }, 100)
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.element!
  }

  _makePropsProxy (props: any): any {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this

    return new Proxy(props as unknown as object, {
      get (target: Record<string, unknown>, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set (target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty () {
        throw new Error('Нет доступа')
      }
    }) as unknown as P
  }

  _createDocumentElement (tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  _removeEvents (): void {
    const events: Record<string, () => void> = (this.props as any).events

    if (Boolean(events) && (this._element != null)) {
      Object.entries(events).forEach(([event, listener]) => {
        this._element?.removeEventListener(event, listener)
      })
    }
  }

  _addEvents (): void {
    const events: Record<string, () => void> = (this.props as any).events

    if (typeof events === 'object') {
      Object.entries(events).forEach(([event, listener]) => {
        this._element?.addEventListener(event, listener)
      })
    }
  }

  _compile (): DocumentFragment {
    const fragment = document.createElement('template')
    // Рендерим шаблон
    const template = Handlebars.compile(this.render())
    fragment.innerHTML = template({ ...this.state, ...this.props, children: this.children, refs: this.refs })

    // Заменяем заглушки на компоненты
    Object.entries(this.children).forEach(([id, component]) => {
      // Ищем заглушку по id
      const stub = fragment.content.querySelector(`[data-id="${String(id)}"]`)

      if (stub == null) {
        return
      }

      const stubChilds = stub.childNodes?.length > 0 ? stub.childNodes : []
      // Заменяем заглушку на component._element
      const content = component.getContent()
      stub.replaceWith(content)

      // Ищем элемент layout-а, куда вставлять детей
      const layoutContent = content.querySelector('[data-layout="1"]')

      if ((Boolean(layoutContent)) && stubChilds.length > 0) {
        // @ts-expect-error
        layoutContent?.append(...stubChilds)
      }
    })

    return fragment.content
  }

  show (): void {
    this.getContent().style.display = 'block'
  }

  hide (): void {
    this.getContent().style.display = 'none'
  }
}
