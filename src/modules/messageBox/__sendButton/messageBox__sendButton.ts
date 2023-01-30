import Block from 'core/Block'
import send from 'static/send.png'
import './messageBox__sendButton.css'

interface MessageBoxButtonProps {
  onClick: () => void
}

interface MessageBoxButtonClassProps {
  events: {
    click: () => void
  }
}

export class MessageBoxButton extends Block<MessageBoxButtonClassProps> {
  constructor ({ onClick }: MessageBoxButtonProps) {
    super({
      events: {
        click: onClick
      }
    })
  }

  static componentName = 'MessageBoxButton'

  protected render (): string {
    // language=hbs
    return `
      <button class="message-box__send-button" type="submit">
        <img class="message-box__send-image" src="${send}" alt="Отправка сообщения">
      </button>
    `
  }
}
