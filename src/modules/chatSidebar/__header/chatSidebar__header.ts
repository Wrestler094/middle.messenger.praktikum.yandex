import Block from 'core/Block'
import Router from 'core/Router'
import settings from 'static/settings.png'
import './chatSidebar__header.css'

interface SidebarHeaderProps {
  events: {
    click: (evt: MouseEvent) => void
  }
}

export class SidebarHeader extends Block<SidebarHeaderProps> {
  constructor () {
    super({ events: { click: onClick } })

    function onClick (evt: MouseEvent): void {
      evt.preventDefault()

      if (evt.target === document.getElementById('settings')) {
        Router.go('/settings')
      }
    }
  }

  static componentName = 'SidebarHeader'

  protected render (): string {
    // language=hbs
    return `
      <header class="chat-sidebar__header chats-header">
        <h2 class="chat-header__title">Чаты</h2>
        <a class="chat-header__link" href="/settings">
          <img id="settings" class="chats-header__settings" src="${settings}" alt="Настройки">
        </a>
      </header>
    `
  }
}
