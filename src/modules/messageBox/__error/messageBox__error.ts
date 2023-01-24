import Block from 'core/Block'
import './messageBox__error.css'

interface MessageBoxErrorProps {
  error?: string
}

export class MessageBoxError extends Block<MessageBoxErrorProps> {
  render (): string {
    // language=hbs
    return `
      <div class="message-box__error">{{#if error}}{{error}}{{/if}}</div>
    `
  }
}
