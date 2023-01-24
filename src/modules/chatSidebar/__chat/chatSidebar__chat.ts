import Block from 'core/Block'
import avatar from 'static/avatar.png'
import './chatSidebar__chat.css'

interface SidebarChatProps {
  active?: boolean
  name?: string
  time?: string
  unreadMessages?: number
}

export class SidebarChat extends Block {
  constructor (props: SidebarChatProps) {
    super(props)
  }

  render (): string {
    // language=hbs
    return `
      <li class="chat {{#if active}}chat--active{{/if}}">
        <img class="chat__avatar" src="${avatar}" alt="avatar">
        <h4 class="chat__name">{{name}}</h4>
        <p class="chat__last-message">Haha oh man 🔥</p>
        <p class="chat__last-message-time">{{time}}</p>
        {{#if unreadMessages}}<div class="chat__unread-messages-number">{{unreadMessages}}</div>{{/if}}
      </li>
    `
  }
}
