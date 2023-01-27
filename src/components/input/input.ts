import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import './input.css'

interface InputProps {
  onInput?: () => void
  onFocus?: (evt: FocusEvent) => void
  onBlur?: (evt: FocusEvent) => void
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
  label?: string
  error?: string
}

export class Input extends Block<InputProps> {
  constructor (props: InputProps) {
    super({
      ...props,
      onInput: () => {
        this.refs.inputErrorRef.setProps({ text: '' })
      },
      onFocus: (evt: FocusEvent) => {
        const evtTarget = evt.target as HTMLInputElement

        if (evtTarget.placeholder !== '') {
          this.refs.inputLabelRef.setProps({ text: this.props.placeholder })
          this.refs.inputFieldRef.setProps({ placeholder: null })

          const inputElem = this._element?.querySelector('#' + String(this.props.id)) as HTMLInputElement
          inputElem.focus()
        }
      },
      onBlur: (evt: FocusEvent) => {
        const evtTarget = evt.target as HTMLInputElement
        const inputType: ValidateRuleType = this.props.id as ValidateRuleType
        const [error] = validateForm([{
          type: inputType,
          value: evtTarget.value
        }])

        this.refs.inputErrorRef.setProps({ text: error })

        if (evtTarget.value === '') {
          this.refs.inputLabelRef.setProps({ text: null })
          this.refs.inputFieldRef.setProps({ placeholder: this.props.placeholder })
        }
      }
    })
  }

  static componentName = 'Input'

  protected render (): string {
    // language=hbs
    return `
      <div class="input">
        {{{InputLabel id=id text=label ref='inputLabelRef'}}}
        {{{InputField
          type=type
          id=id
          placeholder=placeholder
          onInput=onInput
          onFocus=onFocus
          onBlur=onBlur
          ref='inputFieldRef'
        }}}
        {{{InputError text=error ref='inputErrorRef'}}}
      </div>
    `
  }
}
