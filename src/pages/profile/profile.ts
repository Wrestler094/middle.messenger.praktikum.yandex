import Block from 'core/Block'
import './profile.css'

export class ProfilePage extends Block {
  constructor () {
    super()

    this.setProps({
      email: 'pochta@yandex.ru',
      login: 'ivanivanov',
      first_name: 'Иван',
      second_name: 'Иванов',
      chat_name: 'Иван',
      phone: '+7 (909) 967 30 30'
    })
  }

  static componentName = 'ProfilePage'

  protected render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Страница профиля</h1>
        {{{LinkBack to="/chat"}}}
        <div class="profile__data">
          {{{Avatar}}}
          <h2 class="profile-name">Иван</h2>
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
              <a class="control__link" href="/edit-profile">Изменить данные</a>
            </li>
            <li class="control__item">
              <a class="control__link" href="/edit-password">Изменить пароль</a>
            </li>
            <li class="control__item">
              <a class="control__link control__link--error" href="/auth">Выйти</a>
            </li>
          </ul>
        </div>
      </main>
    `
  }
}
