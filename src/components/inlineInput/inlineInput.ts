import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import './inlineInput.css'

interface InlineInputProps {
  type?: 'text' | 'password' | 'email'
  id: string
  placeholder: string
  label: string
}

interface InlineInputClassProps extends InlineInputProps {
  onInput: () => void
  onBlur: (evt: FocusEvent) => void
  error?: string
}

export class InlineInput extends Block<InlineInputClassProps> {
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

  static componentName = 'InlineInput'

  protected render (): string {
    // language=hbs
    return `
      <li class="inline-input">
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
