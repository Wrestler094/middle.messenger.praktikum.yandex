import { Block, Store } from 'core'
import defaultAvatar from 'static/avatar.png'
import './chatSidebar__chat.css'

interface SidebarChatClassProps {
  title: string
  avatar: string
  lastMessage: string
  time: string
  active?: boolean
  unreadMessages?: number
}

interface SidebarChatProps extends SidebarChatClassProps {
  events: {
    click: () => void
  }
}

export class SidebarChat extends Block<SidebarChatProps> {
  constructor (props: SidebarChatClassProps) {
    if (props.avatar == null) {
      props.avatar = defaultAvatar
    } else {
      props.avatar = 'https://ya-praktikum.tech/api/v2/resources' + String(props.avatar)
    }

    super({ ...props, events: { click: () => { onClick(this) } } })

    function onClick (ctx: Record<string, any>): void {
      Store.dispatch({ activeChatId: ctx.props.id })
    }
  }

  static componentName = 'SidebarChat'

  protected render (): string {
    // language=hbs
    return `
      <li class="chat {{#if active}}chat--active{{/if}}">
        <img class="chat__avatar" src="{{avatar}}" alt="avatar">
        <h4 class="chat__name">{{title}}</h4>
        <p class="chat__last-message">{{lastMessage}}</p>
        <p class="chat__last-message-time">{{time}}</p>
        {{#if unreadMessages}}<div class="chat__unread-messages-number">{{unreadMessages}}</div>{{/if}}
      </li>
    `
  }
}
