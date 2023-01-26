import Block from 'core/Block'
import './chatSidebar__search.css'

export class SidebarSearch extends Block {
  constructor () {
    super({
      events: {
        keypress: (evt: KeyboardEvent) => {
          if (evt.key === 'Enter') {
            const evtTarget = evt.target as HTMLInputElement
            console.log(evtTarget.value)
          }
        }
      }
    })
  }

  protected render (): string {
    // language=hbs
    return `
      <label>
          <input class="search" type="search" placeholder="Поиск сообщений">
      </label>
    `
  }
}
