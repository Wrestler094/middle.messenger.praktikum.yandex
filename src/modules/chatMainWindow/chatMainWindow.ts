import { Block, Store } from 'core'
import { withStore } from 'helpers/withStore'
import './chatMainWindow.css'

class ChatMainWindow extends Block<Record<string, never>> {
  static componentName = 'ChatMainWindow'

  protected render (): string {
    // @ts-expect-error
    const activeChatId = Store.getState().activeChatId

    if (activeChatId != null) {
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
