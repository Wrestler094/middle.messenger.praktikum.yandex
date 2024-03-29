import { Block } from 'core'
import { chatService } from 'services/chatService'

interface ChatSidebarModalProps {
  onClick: (evt: MouseEvent, ctx: Record<string, any>) => void
}

export class ChatSidebarModal extends Block<ChatSidebarModalProps> {
  constructor () {
    super({
      onClick: (evt: MouseEvent) => { clicksHandler(evt, this) }
    })

    function clicksHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      const chatNameInput = document.getElementById('add-chat') as HTMLInputElement
      const chatName = chatNameInput.value

      if (chatName !== '') {
        void chatService.createChat({
          title: chatName
        }, ctx, chatNameInput)
      }
    }
  }

  static componentName = 'ChatSidebarModal'

  protected render (): string {
    // language=hbs
    return `
      {{#Modal}}
        <h3 class="modal__title">Добавить чат</h3>
        <label class="modal__label" for="">
          Название чата
          <input class="modal__input" id="add-chat" type="text" placeholder="Введите название чата" />
        </label>
        {{{Button text='Добавить' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
