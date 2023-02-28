import { EventBus } from 'core'

export type Dispatch<State> = (
  nextStateOrAction: Partial<State> | Action<State>,
  payload?: any,
) => void

export type Action<State> = (
  dispatch: Dispatch<State>,
  state: State,
  payload: any,
) => void

export class Store<State extends AppState> extends EventBus {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  private state: State = {} as State

  constructor (defaultState: State) {
    super()

    this.state = defaultState
    this.set(defaultState)
  }

  public getState (): State {
    return this.state
  }

  public set (nextState: Partial<State>): void {
    const prevState = { ...this.state }

    this.state = { ...this.state, ...nextState }

    this.emit('changed', prevState, nextState)
  }

  public dispatch (nextStateOrAction: Partial<State> | Action<State>, payload?: any): void {
    if (typeof nextStateOrAction === 'function') {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload)
    } else {
      this.set({ ...this.state, ...nextStateOrAction })
    }
  }
}

export const store = new Store({
  isLoading: false,
  user: null,
  chats: null,
  activeChatId: null,
  messages: null
})
