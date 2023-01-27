import Block from 'core/Block'
import './chat.css'

export class ChatPage extends Block {
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
