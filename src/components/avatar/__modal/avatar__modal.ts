import Block from 'core/Block'
import { userService } from 'services/userService'
import './avatar__modal.css'

interface AvatarModalProps {
  onClick: (evt: MouseEvent, ctx: Record<string, any>) => void
}

export class AvatarModal extends Block<AvatarModalProps> {
  constructor () {
    super({
      onClick: (evt: MouseEvent) => { clicksHandler(evt, this) }
    })

    function clicksHandler (_evt: MouseEvent, ctx: Record<string, any>): void {
      const input = document.getElementById('avatar') as HTMLInputElement
      const inputFiles = input.files as FileList

      if (inputFiles.length > 0) {
        const formData = new FormData()
        formData.append('avatar', inputFiles[0])

        void userService.changeAvatar(formData, ctx)
      }
    }
  }

  static componentName = 'AvatarModal'

  protected render (): string {
    // language=hbs
    return `
      {{#Modal}}
        <h3 class="avatar-modal__title">Загрузите файл</h3>
        <label class="avatar-modal__attach" for="avatar">Выбрать файл на компьютере</label>
        <input 
          id="avatar" 
          name="avatar" 
          type="file" 
          accept="image/jpeg, image/png, image/jpg" 
          class="visually-hidden"
        >
        {{{Button text='Поменять' onClick=onClick}}}
      {{/Modal}}
    `
  }
}
