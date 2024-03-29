import { Block, Store } from 'core'
import { chatService } from 'services/chatService'

interface AddUserModalProps {
  onClick: (evt: MouseEvent, ctx: Record<string, any>) => void
}

export class AddUserModal extends Block<AddUserModalProps> {
  constructor () {
    super({
      onClick: (evt: MouseEvent) => { clicksHandler(evt, this) }
    })

    function clicksHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      const chatId = Store.getState().activeChatId
      const addUserInput = document.getElementById('add-user') as HTMLInputElement
      const newUserId = parseInt(addUserInput.value)

      if (!isNaN(newUserId)) {
        void chatService.addChatUsers({
          users: [newUserId],
          chatId
        }, ctx, addUserInput)
      }
    }
  }

  static componentName = 'AddUserModal'

  protected render (): string {
    // language=hbs
    return `
      {{#Modal}}
        <h3 class="modal__title">Добавить пользователя</h3>
        <label class="modal__label" for="add-user">
          Id пользователя
          <input class="modal__input" id="add-user" type="number" placeholder="Введите id пользователя" />
        </label>
        {{{Button text='Добавить' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
