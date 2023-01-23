import Block from 'core/Block'
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
        {{{LinkBack to="/chat"}}}
        <div class="profile__data">
          {{{Avatar}}}
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
