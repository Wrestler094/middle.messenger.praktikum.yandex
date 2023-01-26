import Block from 'core/Block'
import defaultAvatar from 'static/default-avatar.png'
import './avatar.css'

export class Avatar extends Block {
  protected render (): string {
    // language=hbs
    return `
      <div class="avatar-wrapper">
        <img class="avatar" src="${defaultAvatar}" alt="Аватар пользователя">
      </div>
    `
  }
}
