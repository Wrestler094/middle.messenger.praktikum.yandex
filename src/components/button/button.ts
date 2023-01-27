import Block from 'core/Block'
import './button.css'

interface ButtonProps {
  text: string
  onClick?: () => void
}

export class Button extends Block {
  constructor ({ text, onClick }: ButtonProps) {
    super({ text, events: { click: onClick } })
  }

  static componentName = 'Button'

  protected render (): string {
    // language=hbs
    return `
      <button class="button" type="button">{{text}}</button>
    `
  }
}
