import Block from 'core/Block'
import './inlineInput__field.css'

interface InlineInputFieldProps {
  onInput: () => void
  onFocus: () => void
  onBlur: () => void
  type?: 'text' | 'password' | 'email'
  id: string
  placeholder: string
}

interface InlineInputFieldClassProps {
  type: 'text' | 'password' | 'email'
  id: string
  placeholder: string
  events: {
    input: () => void
    focus: () => void
    blur: () => void
  }
}

export class InlineInputField extends Block<InlineInputFieldClassProps> {
  constructor ({ onInput, onFocus, onBlur, type = 'text', id, placeholder }: InlineInputFieldProps) {
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

  static componentName = 'InlineInputField'

  protected render (): string {
    // language=hbs
    return `
      <input
        class="inline-input__field"
        type="{{type}}"
        placeholder="{{placeholder}}"
        name="{{id}}"
        id="{{id}}"
        required
      />
    `
  }
}