import { Store } from 'core'

describe('Store tests', () => {
  it('Store get state', () => {
    expect(Store.getState()).toEqual({
      isLoading: false,
      user: null,
      chats: null,
      messages: null,
      activeChatId: null
    })
  })

  it('Store set state', () => {
    // @ts-expect-error TS2322
    Store.set({ activeChatId: 123 })

    expect(Store.getState()).toEqual({
      isLoading: false,
      user: null,
      chats: null,
      messages: null,
      activeChatId: 123
    })
  })

  it('Store dispatch state', () => {
    // @ts-expect-error TS2322
    Store.dispatch({ activeChatId: 123 })

    expect(Store.getState()).toEqual({
      isLoading: false,
      user: null,
      chats: null,
      messages: null,
      activeChatId: 123
    })
  })

  it('Should emit event after store was update', () => {
    const store = Store
    const mock = jest.fn()

    store.on('changed', mock)

    // @ts-expect-error TS2322
    store.set({ activeChatId: 123 })

    expect(mock).toHaveBeenCalled()
    // expect(mock).toHaveBeenCalledWith()
  })
})
