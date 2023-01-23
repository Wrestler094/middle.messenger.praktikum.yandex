import Block from 'core/Block'
import avatar from 'static/avatar.png'
import './chatSidebar__chat.css'

export class SidebarChat extends Block {
  render (): string {
    // language=hbs
    return `
      <li class="chat {{#if active}}chat--active{{/if}}">
        <img class="chat__avatar" src="${avatar}" alt="avatar">
        <h4 class="chat__name">{{name}} Name</h4>
        <p class="chat__last-message">Haha oh man 🔥</p>
        <p class="chat__last-message-time">{{time}} 02.20</p>
        <div class="chat__unread-messages-number">4</div>
      </li>
    `
  }
}
