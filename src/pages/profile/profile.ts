import Block from 'core/Block'
import { Store } from 'core'
import './profile.css'

interface ProfilePageProps {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  chat_name: string
  phone: string
  onClick: (evt: MouseEvent) => void
}

export class ProfilePage extends Block<ProfilePageProps> {
  constructor () {
    // @ts-expect-error
    const user = Store.getState().user as User

    super({
      email: user.email,
      login: user.login,
      first_name: user.first_name,
      second_name: user.second_name,
      display_name: user.display_name != null ? user.display_name : user.first_name,
      chat_name: user.display_name,
      phone: user.phone,
      onClick: (evt: MouseEvent) => { clickHandler(evt, this) }
    })

    function clickHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      ctx.refs.avatarModal.show()
    }
  }

  static componentName = 'ProfilePage'

  protected render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Страница профиля</h1>
        {{{LinkBack to="/messenger"}}}
        <div class="profile__data">
          {{{Avatar onClick=onClick}}}
          {{{AvatarModal ref='avatarModal'}}}
          <h2 class="profile-name">{{{display_name}}}</h2>
          <ul class="user-info">
            <li class="user-info__item">
              <p>Почта</p>
              <p class="user-info__item-data">{{{email}}}</p>
            </li>
            <li class="user-info__item">
              <p>Логин</p>
              <p class="user-info__item-data">{{{login}}}</p>
            </li>
            <li class="user-info__item">
              <p>Имя</p>
              <p class="user-info__item-data">{{{first_name}}}</p>
            </li>
            <li class="user-info__item">
              <p>Фамилия</p>
              <p class="user-info__item-data">{{{second_name}}}</p>
            </li>
            <li class="user-info__item">
              <p>Имя в чате</p>
              <p class="user-info__item-data">{{{chat_name}}}</p>
            </li>
            <li class="user-info__item">
              <p>Телефон</p>
              <p class="user-info__item-data">{{{phone}}}</p>
            </li>
          </ul>
          <ul class="control">
            <li class="control__item">
                {{{ControlLink classes='control__link' to='/edit-profile' text='Изменить данные'}}}
            </li>
            <li class="control__item">
                {{{ControlLink classes='control__link' to='/edit-password' text='Изменить пароль'}}}
            </li>
            <li class="control__item">
              {{{ControlLink classes='control__link control__link--error' to='/' text='Выйти'}}}
            </li>
          </ul>
        </div>
      </main>
    `
  }
}
