import Block from 'core/Block'
import './inlineInput__error.css'

interface InlineInputErrorProps {
  error?: string
}

export class InlineInputError extends Block<InlineInputErrorProps> {
  protected render (): string {
    // language=hbs
    return `
      <div class="inline-input__error">{{#if error}}{{error}}{{/if}}</div>
    `
  }
}
