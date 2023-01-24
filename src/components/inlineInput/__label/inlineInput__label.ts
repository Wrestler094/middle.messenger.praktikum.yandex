import Block from 'core/Block'
import './inlineInput__label.css'

interface InlineInputLabelProps {
  id?: string
  label?: string
}

export class InlineInputLabel extends Block<InlineInputLabelProps> {
  protected render (): string {
    // language=hbs
    return `
      <label for="{{id}}">{{label}}</label>
    `
  }
}
