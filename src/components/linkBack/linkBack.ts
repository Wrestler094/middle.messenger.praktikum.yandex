import Block from 'core/Block'
import backArrow from 'static/back-arrow.png'
import './linkBack.css'

interface LinkBackProps {
  to: string
}

export class LinkBack extends Block {
  constructor (props: LinkBackProps) {
    const onClick = (e: MouseEvent): void => {
      e.preventDefault()
      window.location.replace(this.props.to)
    }

    super({ ...props, events: { click: onClick } })
  }

  static componentName = 'LinkBack'

  protected render (): string {
    // language=hbs
    return `
      <a class="link-back" href="{{to}}">
          <img src="${backArrow}" alt="Назад">
      </a>
    `
  }
}
