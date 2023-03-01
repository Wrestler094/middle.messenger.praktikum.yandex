import { Block } from 'core'
import './input__error.css'

interface InputErrorProps {
  text?: string
}

export class InputError extends Block<InputErrorProps> {
  static componentName = 'InputError'

  protected render (): string {
    // language=hbs
    return `
      <div class="input__error">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
