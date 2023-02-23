import Block from 'core/Block'
import './modal.css'

interface ModalProps {
  events: {
    click: (evt: MouseEvent) => void
  }
}

export class Modal extends Block<ModalProps> {
  constructor () {
    super({ events: { click: clickHandler } })

    function clickHandler (evt: MouseEvent): void {
      if (this === evt.target) {
        this.style.display = 'none'
      }
    }
  }

  static componentName = 'Modal'

  protected render (): string {
    // language=hbs
    return `
      <div class="modal" style="display: none;">
        <div class="modal__content" data-layout=1></div>
      </div>
    `
  }
}
