import Block from 'core/Block'
import './inlineInput__field.css'

interface InlineInputFieldProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
}

export class InlineInputField extends Block {
  constructor ({ onInput, onFocus, onBlur, type, id, placeholder }: InlineInputFieldProps) {
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
        class="profile-edit-input__field"
        type="{{type}}"
        placeholder="{{placeholder}}"
        name="{{id}}"
        id="{{id}}"
        required
      />
    `
  }
}
