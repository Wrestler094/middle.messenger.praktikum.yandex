import Block from 'core/Block'

interface MainWindowModalProps {
  onClick: (evt: MouseEvent, ctx: Record<string, any>) => void
}

export class MainWindowModal extends Block<MainWindowModalProps> {
  constructor () {
    super({
      onClick: (evt: MouseEvent) => { clicksHandler(evt, this) }
    })

    function clicksHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      console.log(_evt, ctx)
    }
  }

  static componentName = 'MainWindowModal'

  protected render (): string {
    // language=hbs
    return `
      {{#Modal}}
        <h3 class="avatar-modal__title">Загрузите файл</h3>
        <label class="avatar-modal__attach" for="avatar">Выбрать файл на компьютере</label>
        {{{Button text='Поменять' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
