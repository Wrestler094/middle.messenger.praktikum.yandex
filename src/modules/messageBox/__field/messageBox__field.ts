import Block from 'core/Block'
import './messageBox__field.css'

interface MessageBoxFieldProps {
  onInput?: () => void

}

export class MessageBoxField extends Block {
  constructor ({ onInput }: MessageBoxFieldProps) {
    super({
      events: {
        input: onInput
      }
    })
  }

  render (): string {
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
