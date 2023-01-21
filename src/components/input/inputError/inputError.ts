import Block from 'core/Block'
import './inputError.css'

interface InputErrorProps {
  text?: string
}

export class InputError extends Block<InputErrorProps> {
  protected render (): string {
    // language=hbs
    return `
      <div class="input__error">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
