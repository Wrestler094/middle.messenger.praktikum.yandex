import Block from 'core/Block'
import './messageBox__field.css'

interface MessageBoxFieldProps {
  onInput: () => void
}

interface MessageBoxFieldClassProps {
  events: {
    input: () => void
  }
}

export class MessageBoxField extends Block<MessageBoxFieldClassProps> {
  constructor ({ onInput }: MessageBoxFieldProps) {
    super({
      events: {
        input: onInput
      }
    })
  }

  static componentName = 'MessageBoxField'

  protected render (): string {
    // language=hbs
    return `
      <input
        class="message-box__field"
        name="message"
        id="message"
        type="text"
        placeholder="Введите сообщение"
      >
    `
  }
}
