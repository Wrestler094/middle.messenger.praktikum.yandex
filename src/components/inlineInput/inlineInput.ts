import Block from 'core/Block'
import './inlineInput.css'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'

interface InlineInputProps {
  onInput?: () => void
  onBlur?: (evt: FocusEvent) => void
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
  label?: string
  error?: string
}

export class InlineInput extends Block {
  constructor (props: InlineInputProps) {
    super({
      ...props,
      onInput: () => {
        this.refs.inlineInputErrorRef.setProps({ error: '' })
      },
      onBlur: (evt: FocusEvent) => {
        const evtTarget = evt.target as HTMLInputElement
        const inputType: ValidateRuleType = this.props.id as ValidateRuleType
        const [error] = validateForm([{
          type: inputType,
          value: evtTarget.value
        }])

        this.refs.inlineInputErrorRef.setProps({ error })
      }
    })
  }

  render (): string {
    // language=hbs
    return `
      <li class="profile-edit-input">
        {{{InlineInputError 
          error=error
          ref='inlineInputErrorRef'
        }}}
        {{{InlineInputLabel 
          id=id 
          label=label
          ref='inlineInputLabelRef'
        }}}
        {{{InlineInputField
          type=type
          id=id
          placeholder=placeholder
          onInput=onInput
          onBlur=onBlur
          ref='inlineInputFieldRef'
        }}}
      </li>
    `
  }
}
