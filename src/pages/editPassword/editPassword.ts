import Block from 'core/Block'
import defaultAvatar from 'static/default-avatar.png'
import backArrow from 'static/back-arrow.png'
import './editPassword.css'

export class EditPasswordPage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => { this.onSubmit() }
    })
  }

  onSubmit (): void {
    console.log('btn clicked')
  }

  render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Смена пароля</h1>
        <a class="link-back" href="/">
          <img src="${backArrow}" alt="Назад к чатам">
        </a>
        <div class="profile__data">
          <div class="profile__avatar-wrapper">
            <img class="profile__avatar" src="${defaultAvatar}" alt="Аватар пользователя">
          </div>
          <ul class="profile__edit-pass">
            {{{InlineInput
              label='Старый пароль'
              placeholder='•••••••••'
              type='password'
              id='oldPassword'
            }}}
            {{{InlineInput
              label='Новый пароль'
              placeholder='•••••••••'
              type='password'
              id='newPassword'
            }}}
            {{{InlineInput
              label='Повторите новый пароль'
              placeholder='•••••••••'
              type='password'
              id='rePassword'
            }}}
          </ul>
          <div class="profile__button">
            {{{Button text="Сохранить" onClick=onSubmit}}}
          </div>
        </div>
      </main>
    `
  }
}
