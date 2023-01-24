import Block from 'core/Block'
import './chatMainWindow.css'

export class ChatMainWindow extends Block {
  render (): string {
    // language=hbs
    return `
      <div class="main-chat">
        {{{MainWindowHeader}}}
        {{{MainWindowContent}}}
        {{{MessageBox}}}
      </div>
    `
  }
}
