import Block from 'core/Block'
import './chatSidebar__search.css'

export class SidebarSearch extends Block {
  render (): string {
    // language=hbs
    return `
      <label>
          <input class="search" type="search" placeholder="Поиск сообщений">
      </label>
    `
  }
}
