import Block from 'core/Block'
import settings from 'static/settings.png'
import './chatSidebar__header.css'

export class SidebarHeader extends Block {
  protected render (): string {
    // language=hbs
    return `
      <header class="chat-sidebar__header chats-header">
        <h2 class="chat-header__title">Чаты</h2>
        <a class="chat-header__link" href="/profile">
          <img class="chats-header__settings" src="${settings}" alt="Настройки">
        </a>
      </header>
    `
  }
}
