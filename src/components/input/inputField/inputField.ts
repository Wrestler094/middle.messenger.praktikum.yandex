import Block from 'core/Block'

import './inputField.css'

interface InputFieldProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
}

export class InputField extends Block {
  constructor ({ onInput, onFocus, onBlur, type, id, placeholder }: InputFieldProps) {
    super({
      type,
      id,
      placeholder,
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur
      }
    })
  }

  protected render (): string {
    // language=hbs
    return `
      <input 
        class="input__field" 
        id="{{id}}" 
        name="{{id}}" 
        type="{{type}}" 
        placeholder="{{placeholder}}"
        required
      >
    `
  }
}
