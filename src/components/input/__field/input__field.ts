import { Block } from 'core'
import './input__field.css'

interface InputFieldProps {
  onInput: () => void
  onFocus: () => void
  onBlur: () => void
  type?: 'text' | 'password' | 'email'
  id: string
  placeholder: string
}

interface InputFieldClassProps {
  type: 'text' | 'password' | 'email'
  id: string
  placeholder: string
  events: {
    input: () => void
    focus: () => void
    blur: () => void
  }
}

export class InputField extends Block<InputFieldClassProps> {
  constructor ({ onInput, onFocus, onBlur, type = 'text', id, placeholder }: InputFieldProps) {
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

  static componentName = 'InputField'

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
