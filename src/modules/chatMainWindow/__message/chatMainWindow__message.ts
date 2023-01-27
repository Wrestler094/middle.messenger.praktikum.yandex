import Block from 'core/Block'
import avatar from 'static/avatar.png'
import './chatMainWindow__message.css'

interface MainWindowMessageProps {
  author: boolean
  messages: string
}

export class MainWindowMessage extends Block {
  constructor (props: MainWindowMessageProps) {
    props.messages = JSON.parse(props.messages)
    super(props)
  }

  static componentName = 'MainWindowMessage'

  protected render (): string {
    // language=hbs
    return `
      {{#if author}}
        <div class="my-messages">
          <img class="my-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          {{#each messages}}
            <p class="my-messages__message">{{this}}</p>
          {{/each}}
        </div>
      {{else}}
        <div class="companion-messages">
          <img class="companion-messages__avatar" src="${avatar}" alt="Аватар пользователя">
          {{#each messages}}
            <p class="companion-messages__message">{{this}}</p>
          {{/each}}
        </div>
      {{/if}}
    `
  }
}
