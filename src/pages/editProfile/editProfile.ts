import Block from 'core/Block'
import defaultAvatar from 'static/default-avatar.png'
import './editProfile.css'

export class EditProfilePage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => {
        this.onSubmit()
      }
    })
  }

  onSubmit (): void {
    console.log('btn clicked')
  }

  render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Настройки профиля</h1>
        {{{LinkBack to="/chat"}}}
        <div class="profile__data">
          <div class="profile__avatar-wrapper">
            <img class="profile__avatar" src="${defaultAvatar}" alt="Аватар пользователя">
          </div>
          <ul class="profile__edit-data">
            {{{InlineInput
              label='Почта'
              placeholder='pochta@yandex.ru'
              type='email'
              id='email'
            }}}
            {{{InlineInput
              label='Логин'
              placeholder='ivanivanov'
              type='text'
              id='login'
            }}}
            {{{InlineInput
              label='Имя'
              placeholder='Иван'
              type='text'
              id='first_name'
            }}}
            {{{InlineInput
              label='Фамилия'
              placeholder='Иванов'
              type='text'
              id='second_name'
            }}}
            {{{InlineInput
              label='Имя в чате'
              placeholder='Иван'
              type='text'
              id='display_name'
            }}}
            {{{InlineInput
              label='Телефон'
              placeholder='+7 (909) 967 30 30'
              type='tel'
              id='phone'
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
