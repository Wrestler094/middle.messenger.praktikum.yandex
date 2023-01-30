import Block from 'core/Block'
import submitHandler from './utils/submitHandler'

interface EditProfilePageProps {
  onSubmit: (evt: SubmitEvent) => void
}

export class EditProfilePage extends Block<EditProfilePageProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) }
    })
  }

  static componentName = 'EditProfilePage'

  protected render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Настройки профиля</h1>
        {{{LinkBack to="/profile"}}}
        <div class="profile__data">
          {{{Avatar}}}
          <form>
            <ul class="profile__edit-data">
              {{{InlineInput
                label='Почта'
                placeholder='pochta@yandex.ru'
                type='email'
                id='email'
                ref='emailInputRef'
              }}}
              {{{InlineInput
                label='Логин'
                placeholder='ivanivanov'
                type='text'
                id='login'
                ref='loginInputRef'
              }}}
              {{{InlineInput
                label='Имя'
                placeholder='Иван'
                type='text'
                id='first_name'
                ref='firstNameInputRef'
              }}}
              {{{InlineInput
                label='Фамилия'
                placeholder='Иванов'
                type='text'
                id='second_name'
                ref='secondNameInputRef'
              }}}
              {{{InlineInput
                label='Имя в чате'
                placeholder='Иван'
                type='text'
                id='display_name'
                ref='displayNameInputRef'
              }}}
              {{{InlineInput
                label='Телефон'
                placeholder='+7 (909) 967 30 30'
                type='tel'
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
