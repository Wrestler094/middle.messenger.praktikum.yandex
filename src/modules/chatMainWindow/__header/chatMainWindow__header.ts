import { Block, Store } from 'core'
import defaultAvatar from 'static/avatar.png'
import call from 'static/call.png'
import options from 'static/options.png'
import './chatMainWindow__header.css'

interface MainWindowHeaderProps {
  avatar: string
  name: string
}

export class MainWindowHeader extends Block<MainWindowHeaderProps> {
  constructor () {
    const store = Store.getState()
    // @ts-expect-error
    const currentChat = store.chats.find((chat) => chat.id === store.activeChatId)
    const avatar = currentChat.avatar != null
      ? 'https://ya-praktikum.tech/api/v2/resources' + String(currentChat.avatar)
      : defaultAvatar

    super({
      avatar,
      name: currentChat.title
    })
  }

  static componentName = 'MainWindowHeader'

  protected render (): string {
    // language=hbs
    return `
      <header class="chat-header">
        <div class="chat-header__user">
          <img class="chat-header__user-image" src="{{avatar}}" alt="Изображение собеседника">
          <h3 class="chat-header__user-name">{{name}}</h3>
          <p class="chat-header__user-online">Online</p>
        </div>
        <div class="chat-header__call">
          <img class="chat-header__call-image" src="${call}" alt="Позвонить">
          <p class="chat-header__call-text">Позвонить</p>
        </div>
        <img class="chat-header__options" src="${options}" alt="avatar">
      </header>
    `
  }
}
