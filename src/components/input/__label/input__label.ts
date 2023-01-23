import Block from 'core/Block'
import './input__label.css'

interface InputLabelProps {
  id?: string
  text?: string
}

export class InputLabel extends Block<InputLabelProps> {
  protected render (): string {
    // language=hbs
    return `
      <label class="input__label" for="{{id}}">{{text}}</label>
    `
  }
}
