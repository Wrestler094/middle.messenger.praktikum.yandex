import Block from 'core/Block'
import avatar from 'static/avatar.png'
import './chatMainWindow__content.css'

export class MainWindowContent extends Block {
  render (): string {
    // language=hbs
    return `
      <div class="main-chat__content">
        <div class="companion-messages">
          <img class="companion-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          <p class="companion-messages__message">omg, this is amazing</p>
          <p class="companion-messages__message">perfect! ✅</p>
          <p class="companion-messages__message">Wow, this is really epic</p>
        </div>
        <div class="my-messages">
          <img class="my-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          <p class="my-messages__message">How are you?</p>
        </div>
        <div class="companion-messages">
          <img class="companion-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          <p class="companion-messages__message">just ideas for next time</p>
          <p class="companion-messages__message">I'll be there in 2 mins ⏰</p>
        </div>
        <div class="my-messages">
          <img class="my-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          <p class="my-messages__message">woohoooo</p>
          <p class="my-messages__message">Haha oh man</p>
          <p class="my-messages__message">Haha that's terrifying 😂</p>
        </div>
        <div class="companion-messages">
          <img class="companion-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          <p class="companion-messages__message">aww</p>
          <p class="companion-messages__message">omg, this is amazing</p>
          <p class="companion-messages__message">woohoooo 🔥</p>
        </div>
      </div>
    `
  }
}
