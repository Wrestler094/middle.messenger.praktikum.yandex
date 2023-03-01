import { Block } from 'core'
import './chat.css'

export class ChatPage extends Block<Record<string, never>> {
  static componentName = 'ChatPage'

  protected render (): string {
    // language=hbs
    return `
      <main class="wrapper">
        {{{ChatSidebar}}}
        {{{ChatMainWindow}}}
      </main>
    `
  }
}
