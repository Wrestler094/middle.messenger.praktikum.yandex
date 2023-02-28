import { Block } from 'core'
import './chatSidebar__search.css'

interface SidebarSearchProps {
  events: {
    keypress: (evt: KeyboardEvent) => void
  }
}

export class SidebarSearch extends Block<SidebarSearchProps> {
  constructor () {
    super({
      events: {
        keypress: (evt: KeyboardEvent): void => { this.onKeyPress(evt) }
      }
    })
  }

  onKeyPress (evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      const evtTarget = evt.target as HTMLInputElement
      console.log(evtTarget.value)
    }
  }

  static componentName = 'SidebarSearch'

  protected render (): string {
    // language=hbs
    return `
      <label>
          <input class="search" type="search" placeholder="Поиск сообщений">
      </label>
    `
  }
}
