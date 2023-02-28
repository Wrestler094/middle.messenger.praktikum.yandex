import { Block, Router } from 'core'
import settings from 'static/settings.png'
import plus from 'static/plus.png'
import './chatSidebar__header.css'

interface SidebarHeaderProps {
  events: {
    click: (evt: MouseEvent, ctx: Record<string, any>) => void
  }
}

export class SidebarHeader extends Block<SidebarHeaderProps> {
  constructor () {
    super({
      events: {
        click: (evt: MouseEvent) => { onClick(evt, this) }
      }
    })

    function onClick (evt: MouseEvent, ctx: Record<string, any>): void {
      evt.preventDefault()

      if (evt.target === document.getElementById('settings')) {
        Router.go('/settings')
      } else if (evt.target === document.getElementById('add-chat-button')) {
        ctx.refs.chatSidebarModal.show()
      }
    }
  }

  static componentName = 'SidebarHeader'

  protected render (): string {
    // language=hbs
    return `
      <header class="chat-sidebar__header chats-header">
        <h2 class="chat-header__title">Чаты</h2>
        <button type="button" class="chats-header__add-chat">
          <img id="add-chat-button" class="chats-header__image" src="${plus}" alt="Добавить чат">
        </button>
        <a class="chats-header__settings" href="/settings">
          <img id="settings" class="chats-header__image" src="${settings}" alt="Настройки">
        </a>
        {{{ChatSidebarModal ref='chatSidebarModal'}}}
      </header>
    `
  }
}
