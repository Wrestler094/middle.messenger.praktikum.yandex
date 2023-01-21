import Block from 'core/Block'

import './link.css'

interface LinkProps {
  text: string
  to: string
}

export class Link extends Block {
  constructor (props: LinkProps) {
    const onClick = (e: MouseEvent): void => {
      e.preventDefault()
      window.location.replace(this.props.to)
    }

    super({ ...props, events: { click: onClick } })
  }

  render (): string {
    // language=hbs
    return `
      <a class="link" href="{{to}}">{{text}}</a>
    `
  }
}
