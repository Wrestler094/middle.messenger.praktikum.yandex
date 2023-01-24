import Block from 'core/Block'
import send from 'static/send.png'
import './messageBox__sendButton.css'

interface MessageBoxButtonProps {
  onClick?: () => void
}

export class MessageBoxButton extends Block {
  constructor ({ onClick }: MessageBoxButtonProps) {
    super({ events: { click: onClick } })
  }

  render (): string {
    // language=hbs
    return `
      <img class="message-box__send-image" src="${send}" alt="Отправка сообщения">
    `
  }
}
