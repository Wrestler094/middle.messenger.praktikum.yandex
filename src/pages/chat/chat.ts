import Block from 'core/Block'
import './chat.css'

export class ChatPage extends Block {
  render (): string {
    // language=hbs
    return `
      <main class="wrapper">
        {{{ChatSidebar}}}
        {{{ChatMainWindow}}}
      </main>
    `
  }
}
