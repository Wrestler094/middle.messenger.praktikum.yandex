import Block from 'core/Block'
import './link.css'

interface LinkProps {
  text: string
  to: string
}

interface LinkClassProps extends LinkProps {
  events: {
    click: (evt: MouseEvent) => void
  }
}

export class Link extends Block<LinkClassProps> {
  constructor (props: LinkProps) {
    const onClick = (evt: MouseEvent): void => {
      evt.preventDefault()
      window.location.replace(this.props.to)
    }

    super({ ...props, events: { click: onClick } })
  }

  static componentName = 'Link'

  protected render (): string {
    // language=hbs
    return `
      <a class="link" href="{{to}}">{{text}}</a>
    `
  }
}
