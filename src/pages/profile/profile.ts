import Block from 'core/Block'
import defaultAvatar from 'static/default-avatar.png'
import backArrow from 'static/back-arrow.png'
import './profile.css'

export class ProfilePage extends Block {
  render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Настройки профиля</h1>
        <a class="profile__link-back" href="/">
          <img src="${backArrow}" alt="Назад к чатам">
        </a>
        <div class="profile__data">
          <div class="profile__avatar-wrapper">
            <img class="profile__avatar" src="${defaultAvatar}" alt="Аватар пользователя">
          </div>
          <h2 class="profile-name">Иван</h2>
          <ul class="user-info">
            <li class="user-info__item">
              <p>Почта</p>
              <p class="user-info__item-data">pochta@yandex.ru</p>
            </li>
            <li class="user-info__item">
              <p>Логин</p>
              <p class="user-info__item-data">ivanivanov</p>
            </li>
            <li class="user-info__item">
              <p>Имя</p>
              <p class="user-info__item-data">Иван</p>
            </li>
            <li class="user-info__item">
              <p>Фамилия</p>
              <p class="user-info__item-data">Иванов</p>
            </li>
            <li class="user-info__item">
              <p>Имя в чате</p>
              <p class="user-info__item-data">Иван</p>
            </li>
            <li class="user-info__item">
              <p>Телефон</p>
              <p class="user-info__item-data">+7 (909) 967 30 30</p>
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
