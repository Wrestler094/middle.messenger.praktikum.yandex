import { Block, Store } from 'core'
import submitHandler from './utils/submitHandler'

interface EditProfilePageProps {
  onSubmit: (evt: SubmitEvent) => void
  onClick: (evt: MouseEvent) => void
}

export class EditProfilePage extends Block<EditProfilePageProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) },
      onClick: (evt: MouseEvent) => { clickHandler(evt, this) }
    })

    function clickHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      ctx.refs.avatarModal.show()
    }
  }

  static componentName = 'EditProfilePage'

  protected render (): string {
    const user = Store.getState().user as unknown as User
    Object.entries(user).forEach(([key, value]) => {
      if (value == null) {
        // @ts-expect-error TS7053
        user[key] = ''
      }
    })

    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Настройки профиля</h1>
        {{{LinkBack to="/settings"}}}
        <div class="profile__data">
          {{{Avatar onClick=onClick}}}
          {{{AvatarModal ref='avatarModal'}}}
          <form>
            <ul class="profile__edit-data">
              {{{InlineInput
                label='Почта'
                placeholder='pochta@yandex.ru'
                type='email'
                value='${user.email}'
                id='email'
                ref='emailInputRef'
              }}}
              {{{InlineInput
                label='Логин'
                placeholder='ivanivanov'
                type='text'
                value='${user.login}'
                id='login'
                ref='loginInputRef'
              }}}
              {{{InlineInput
                label='Имя'
                placeholder='Иван'
                type='text'
                value='${user.first_name}'
                id='first_name'
                ref='firstNameInputRef'
              }}}
              {{{InlineInput
                label='Фамилия'
                placeholder='Иванов'
                type='text'
                value='${user.second_name}'
                id='second_name'
                ref='secondNameInputRef'
              }}}
              {{{InlineInput
                label='Имя в чате'
                placeholder='Иван'
                type='text'
                value='${user.display_name}'
                id='display_name'
                ref='displayNameInputRef'
              }}}
              {{{InlineInput
                label='Телефон'
                placeholder='+7 (909) 967 30 30'
                type='tel'
                value='${user.phone}'
                id='phone'
                ref='phoneInputRef'
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
