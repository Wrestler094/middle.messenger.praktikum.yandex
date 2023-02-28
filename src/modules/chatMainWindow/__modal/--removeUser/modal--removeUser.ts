import { Block, Store } from 'core'
import { chatService } from 'services/chatService'

interface RemoveUserModalProps {
  onClick: (evt: MouseEvent, ctx: Record<string, any>) => void
}

export class RemoveUserModal extends Block<RemoveUserModalProps> {
  constructor () {
    super({
      onClick: (evt: MouseEvent) => { clicksHandler(evt, this) }
    })

    function clicksHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      // @ts-expect-error
      const chatId = Store.getState().activeChatId
      const removeUserInput = document.getElementById('remove-user') as HTMLInputElement
      const newUserId = parseInt(removeUserInput.value)

      if (!isNaN(newUserId)) {
        void chatService.deleteChatUsers({
          users: [newUserId],
          chatId
        }, ctx, removeUserInput)
      }
    }
  }

  static componentName = 'RemoveUserModal'

  protected render (): string {
    // language=hbs
    return `
      {{#Modal}}
        <h3 class="modal__title">Удалить пользователя</h3>
        <label class="modal__label" for="remove-user">
          Id пользователя
          <input class="modal__input" id="remove-user" type="number" placeholder="Введите id пользователя" />
        </label>
        {{{Button text='Удалить' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
