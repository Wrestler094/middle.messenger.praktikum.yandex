import Block from 'core/Block'
import attach from 'static/attach.png'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'
import './messageBox.css'

interface MessageBoxProps {
  onInput?: () => void
}

export class MessageBox extends Block {
  constructor (props: MessageBoxProps) {
    super({
      ...props,
      onInput: () => {
        this.refs.messageBoxErrorRef.setProps({ error: '' })
      }
    })

    this.setProps({
      onSubmit: () => { this.onSubmit() }
    })
  }

  onSubmit (): void {
    const messageElement = this._element?.querySelector('input[name="message"]') as HTMLInputElement
    const [messageError] = validateForm([
      { type: ValidateRuleType.Message, value: messageElement.value }
    ])

    if (messageError !== '') {
      this.refs.messageBoxErrorRef.setProps({ error: messageError })
    }

    if (messageError === '') {
      console.log({
        message: messageElement.value
      })
    }
  }

  protected render (): string {
    // language=hbs
    return `
      <div class="message-box">
        {{{MessageBoxError error=error ref='messageBoxErrorRef'}}}
        <img class="message-box__attach" src="${attach}" alt="Прикрепление файлов">
        <div class="message-box__message-wrapper">
          <label class="message-box__field-label">
            {{{MessageBoxField onInput=onInput}}}
          </label>
          {{{MessageBoxButton onClick=onSubmit}}}
        </div>
      </div>
    `
  }
}
