import { Block, Store, Socket } from 'core'
import { withStore } from 'helpers/withStore'
import { chatService } from 'services/chatService'
import './chatMainWindow.css'

class ChatMainWindow extends Block<Record<string, never>> {
  static componentName = 'ChatMainWindow'

  __onChangeStoreCallback = (): void => {
    // @ts-expect-error
    if (this.props.store.activeChatId !== Store.getState().activeChatId) {
      // @ts-expect-error this is not typed
      this.setProps({ ...this.props, store: Store.getState() })
    }
  }

  protected render (): string {
    const activeChatId = Store.getState().activeChatId

    if (activeChatId != null) {
      const chatId = Store.getState().activeChatId
      if (chatId != null) {
        const storeUser = Store.getState().user as unknown as User
        const userId = storeUser.id

        void chatService.getChatToken(chatId, {})
          .then(res => {
            if (res != null) {
              void Socket.connect(userId, chatId, res.token)
            }
          })
      }

      // language=hbs
      return `
        <div class="main-chat">
          {{{MainWindowHeader}}}
          {{{MainWindowContent}}}
          {{{MessageBox}}}
        </div>
      `
    } else {
      // language=hbs
      return `
        <div class="main-chat--empty">
          Выберите чат, чтобы начать переписку
        </div>
      `
    }
  }
}

// @ts-expect-error
const WrappedChatMainWindow = withStore(ChatMainWindow)
export { WrappedChatMainWindow as ChatMainWindow }
