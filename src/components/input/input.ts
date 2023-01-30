import Block from 'core/Block'
import focusHandler from './utils/focusHandler'
import blurHandler from './utils/blurHandler'
import './input.css'

interface InputProps {
  type?: 'text' | 'password' | 'email'
  id: string
  placeholder: string
  label: string
}

interface InputClassProps extends InputProps {
  onInput: () => void
  onFocus: (evt: FocusEvent) => void
  onBlur: (evt: FocusEvent) => void
  error?: string
}

export class Input extends Block<InputClassProps> {
  constructor (props: InputProps) {
    super({
      ...props,
      onFocus: (evt: FocusEvent) => { focusHandler(evt) },
      onBlur: (evt: FocusEvent) => { blurHandler(evt, this) },
      onInput: () => {
        this.refs.inputErrorRef.setProps({ text: '' })
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
