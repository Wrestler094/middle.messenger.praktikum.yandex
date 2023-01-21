import Block from 'core/Block'

import './allPages.css'

export class AllPagesPage extends Block {
  render (): string {
    // language=hbs
    return `
    <main>
        <h2>Project pages</h2>
        <ul>
            <li>
                <a href="./auth">Авторизация</a>
            </li>
            <li>
                <a href="./reg">Регистрация</a>
            </li>
            <li>
                <a href="./chat">Чат</a>
            </li>
            <li>
                <a href="./profile">Профиль</a>
            </li>
            <li>
                <a href="./edit-profile">Редактирование профиля</a>
            </li>
            <li>
                <a href="./edit-password">Изменение пароля</a>
            </li>
            <li>
                <a href="./404">404</a>
            </li>
            <li>
                <a href="./5xx">5xx</a>
            </li>
        </ul>
    </main>
    `
  }
}
