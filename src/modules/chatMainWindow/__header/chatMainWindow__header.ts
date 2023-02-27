import { Block, Store } from 'core'
import { chatService } from 'services/chatService'
import defaultAvatar from 'static/avatar.png'
import options from 'static/options.png'
import call from 'static/call.png'
import './chatMainWindow__header.css'

interface MainWindowHeaderProps {
  avatar: string
  name: string
  events: {
    click: (evt: MouseEvent) => void
  }
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
      name: currentChat.title,
      events: {
        click: (evt: MouseEvent) => { onClick(evt, this) }
      }
    })

    function onClick (evt: MouseEvent, ctx: Record<string, any>): void {
      if (evt.target instanceof HTMLButtonElement) {
        if (evt.target.id === 'add-user-button') {
          ctx.refs.addUserModal.show()
        } else if (evt.target.id === 'remove-user-button') {
          ctx.refs.removeUserModal.show()
        } else if (evt.target.id === 'add-chat-image-button') {
          // Change chat image service
        } else if (evt.target.id === 'remove-chat-button') {
          // @ts-expect-error
          const deleteChatId = Store.getState().activeChatId

          void chatService.deleteChat({
            chatId: deleteChatId
          })
        }
      }
    }
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
        <div class="options">
          <img class="options__button" src="${options}" alt="avatar">
          <div class="options__container">
            <ul class="options__content">
              <li>
                <button id="add-user-button" type="button">
                  Добавить пользователя
                </button>
              </li>
              <li>
                <button id="remove-user-button" type="button">
                  Удалить пользователя
                </button>
              </li>
              <li>
                <button id="add-chat-image-button" type="button">
                  Изменить изображение чата
                </button>
              </li>
              <li>
                <button id="remove-chat-button" type="button">
                  Удалить чат
                </button>
              </li>
            </ul>
          </div>
        </div>
        {{{AddUserModal ref='addUserModal'}}}
        {{{RemoveUserModal ref='removeUserModal'}}}
      </header>
    `
  }
}
