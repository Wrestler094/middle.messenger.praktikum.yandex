import { EventBus, Store } from 'core'

class Socket extends EventBus {
  socket: WebSocket | null = null
  interval: NodeJS.Timer | null

  public async connect (userId: number, chatId: number, token: string): Promise<void> {
    if (this.socket != null) {
      this.socket.close()
      this._removeInterval()
    }

    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)
    const socket = this.socket

    socket.addEventListener('open', () => {
      console.log('Соединение установлено')

      this._addInterval()
      this._getMessages()
    })

    socket.addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто')
      } else {
        console.log('Обрыв соединения')
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`)
      this._removeInterval()
    })

    socket.addEventListener('message', event => {
      const data = JSON.parse(event.data)
      console.log('%cdata recieved', 'background: #222; color: #55dac6', data)

      if (Array.isArray(data)) {
        // @ts-expect-error TS2322
        Store.dispatch({ messages: data })
      } else if (data.type === 'message' && data.content != null) {
        const messages = Store.getState().messages
        // @ts-expect-error TS2322
        messages.unshift(data)

        Store.dispatch({
          messages
        })
      }
    })

    socket.addEventListener('error', event => {
      // @ts-expect-error TS2339: Property 'message' does not exist on type 'Event'.
      console.log('Ошибка', event.message)
      this._removeInterval()
    })
  }

  private _addInterval (): void {
    this.interval = setInterval(() => {
      this.socket?.send(
        JSON.stringify({
          type: 'ping'
        })
      )
    }, 5000)
  }

  private _removeInterval (): void {
    if (this.interval != null) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  private _getMessages (): void {
    this.socket?.send(
      JSON.stringify({
        content: '0',
        type: 'get old'
      })
    )
  }

  public sendMessage (message: string): void {
    console.log('Отправление сообщения')
    this.socket?.send(
      JSON.stringify({
        content: message,
        type: 'message'
      })
    )
  }
}

export default new Socket()
