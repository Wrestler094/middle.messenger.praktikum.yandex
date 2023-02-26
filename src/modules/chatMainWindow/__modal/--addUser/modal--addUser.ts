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
      // @ts-expect-error
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
        <h3 class="">Добавить пользователя</h3>
        <input id="add-user" type="number" placeholder="Введите id" />
        {{{Button text='Добавить' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
