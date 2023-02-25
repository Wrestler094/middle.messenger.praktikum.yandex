import { Block, Store } from 'core'
import './chatMainWindow.css'

export class ChatMainWindow extends Block<Record<string, never>> {
  static componentName = 'ChatMainWindow'

  protected render (): string {
    // @ts-expect-error
    const activeChat = Store.getState().activeChat
    console.log(activeChat)

    if (activeChat != null) {
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
