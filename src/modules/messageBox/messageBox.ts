import { Block } from 'core'
import submitHandler from './utils/submitHandler'
import attach from 'static/attach.png'
import './messageBox.css'

interface MessageBoxProps {
  onInput: () => void
  onSubmit: (evt: SubmitEvent) => void
}

export class MessageBox extends Block<MessageBoxProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) },
      onInput: () => {
        this.refs.messageBoxErrorRef.setProps({ error: '' })
      }
    })
  }

  static componentName = 'MessageBox'

  protected render (): string {
    // language=hbs
    return `
      <div class="message-box">
        {{{MessageBoxError error=error ref='messageBoxErrorRef'}}}
        <img class="message-box__attach" src="${attach}" alt="Прикрепление файлов">
        <form class="message-box__message-wrapper">
          <label class="message-box__field-label">
            {{{MessageBoxField onInput=onInput ref='messageBoxFieldRef'}}}
          </label>
          {{{MessageBoxButton onClick=onSubmit}}}
        </form>
      </div>
    `
  }
}
