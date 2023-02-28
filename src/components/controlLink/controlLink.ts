import { Block, Router } from 'core'
import { authService } from 'services/authService'

interface ControlLinkProps {
  classes?: string
  text: string
  to: string
}

interface ControlLinkClassProps extends ControlLinkProps {
  events: {
    click: (evt: MouseEvent) => void
  }
}

export class ControlLink extends Block<ControlLinkClassProps> {
  constructor (props: ControlLinkProps) {
    const onClick = (evt: MouseEvent): void => {
      evt.preventDefault()

      if (this.props.to === '/') {
        void authService.logout()
      } else {
        Router.go(this.props.to)
      }
    }

    super({ ...props, events: { click: onClick } })
  }

  static componentName = 'ControlLink'

  protected render (): string {
    // language=hbs
    return `
      <a class="{{classes}}" href="{{to}}">{{text}}</a>
    `
  }
}
