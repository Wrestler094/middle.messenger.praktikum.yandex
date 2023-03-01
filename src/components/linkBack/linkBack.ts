import { Block, Router } from 'core'
import backArrow from 'static/back-arrow.png'
import './linkBack.css'

interface LinkBackProps {
  to: string
}

interface LinkBackClassProps extends LinkBackProps {
  events: {
    click: (evt: MouseEvent) => void
  }
}

export class LinkBack extends Block<LinkBackClassProps> {
  constructor (props: LinkBackProps) {
    const onClick = (evt: MouseEvent): void => {
      evt.preventDefault()
      Router.go(this.props.to)
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
