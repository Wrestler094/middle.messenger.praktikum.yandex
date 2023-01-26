import Block from 'core/Block'
import './chat.css'

export class ChatPage extends Block {
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
