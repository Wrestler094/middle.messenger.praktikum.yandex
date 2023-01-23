import Block from 'core/Block'
import './inlineInput.css'

interface InlineInputProps {
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
  label?: string
  error?: string
}

export class InlineInput extends Block {
  constructor ({ type, id, placeholder, label }: InlineInputProps) {
    super({
      type,
      id,
      placeholder,
      label
    })
  }

  render (): string {
    // language=hbs
    return `
      <li class="profile-edit-input">
        <div class="profile-edit-input__error">{{{error}}}</div>
        <label for="{{id}}">{{label}}</label>
        <input
          class="profile-edit-input__field"
          type="{{type}}"
          placeholder="{{placeholder}}"
          name="{{id}}"
          id={{id}}"
        />
      </li>
    `
  }
}
