import Block from 'core/Block'
import avatar from 'static/avatar.png'
import call from 'static/call.png'
import options from 'static/options.png'
import './chatMainWindow__header.css'

export class MainWindowHeader extends Block {
  render (): string {
    // language=hbs
    return `
      <header class="chat-header">
        <div class="chat-header__user">
          <img class="chat-header__user-image" src="${avatar}" alt="Изображение собеседника">
          <h3 class="chat-header__user-name">Florencio Dorrance</h3>
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
