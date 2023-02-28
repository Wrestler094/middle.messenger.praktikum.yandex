import { Block } from 'core'
import avatar from 'static/avatar.png'
import './chatMainWindow__message.css'

interface MainWindowMessageProps {
  author: boolean
  messages: string
}

export class MainWindowMessage extends Block<MainWindowMessageProps> {
  static componentName = 'MainWindowMessage'

  protected render (): string {
    // language=hbs
    return `
      {{#if author}}
        <div class="my-messages">
          <img class="my-messages__avatar" src="${avatar}" alt="Аватар пользователя">
            <p class="my-messages__message">{{messages}}</p>
        </div>
      {{else}}
        <div class="companion-messages">
          <img class="companion-messages__avatar" src="${avatar}" alt="Аватар пользователя">
            <p class="companion-messages__message">{{messages}}</p>
        </div>
      {{/if}}
    `
  }
}
