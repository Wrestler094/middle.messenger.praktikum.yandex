import Block from 'core/Block'
import submitHandler from './utils/submitHandler'

interface EditPasswordPageProps {
  onSubmit: (evt: SubmitEvent) => void
}

export class EditPasswordPage extends Block<EditPasswordPageProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) }
    })
  }

  static componentName = 'EditPasswordPage'

  protected render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Смена пароля</h1>
        {{{LinkBack to="/profile"}}}
        <div class="profile__data">
          {{{Avatar}}}
          <form>
            <ul class="profile__edit-pass">
              {{{InlineInput
                label='Старый пароль'
                placeholder='•••••••••'
                type='password'
                id='oldPassword'
                ref='oldPasswordInputRef'
              }}}
              {{{InlineInput
                label='Новый пароль'
                placeholder='•••••••••'
                type='password'
                id='newPassword'
                ref='newPasswordInputRef'
              }}}
              {{{InlineInput
                label='Повторите новый пароль'
                placeholder='•••••••••'
                type='password'
                id='repassword'
                ref='repasswordInputRef'
              }}}
            </ul>
            <div class="profile__button">
              {{{Button type="submit" text="Сохранить" onClick=onSubmit}}}
            </div>
          </form>
        </div>
      </main>
    `
  }
}
