import Block from 'core/Block'
import './button.css'

interface ButtonClassProps {
  text: string
  type: string
  events: {
    click?: () => void
  }
}

interface ButtonProps {
  text: string
  type: string
  onClick?: () => void
}

export class Button extends Block<ButtonClassProps> {
  constructor ({ text, type = 'button', onClick }: ButtonProps) {
    super({ text, type, events: { click: onClick } })
  }

  static componentName = 'Button'

  protected render (): string {
    // language=hbs
    return `
      <button class="button" type="{{type}}">{{text}}</button>
    `
  }
}
