import Block from 'core/Block'
import './editPassword.css'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'

export class EditPasswordPage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => { this.onSubmit() }
    })
  }

  onSubmit (): void {
    console.log('btn clicked')

    const oldPasswordElement = this._element?.querySelector('input[name="oldPassword"]') as HTMLInputElement
    const newPasswordElement = this._element?.querySelector('input[name="newPassword"]') as HTMLInputElement
    const repasswordElement = this._element?.querySelector('input[name="rePassword"]') as HTMLInputElement

    const isFormValid = true
    const [
      oldPasswordError,
      newPasswordError,
      repasswordError
    ] = validateForm([
      { type: ValidateRuleType.Password, value: newPasswordElement.value },
      { type: ValidateRuleType.Password, value: oldPasswordElement.value },
      { type: ValidateRuleType.Repassword, value: repasswordElement.value, value2: oldPasswordElement.value }
    ])

    console.log(isFormValid)
    console.log(oldPasswordError)
    console.log(newPasswordError)
    console.log(repasswordError)
  }

  render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Смена пароля</h1>
        {{{LinkBack to="/chat"}}}
        <div class="profile__data">
          {{{Avatar}}}
          <ul class="profile__edit-pass">
            {{{InlineInput
              label='Старый пароль'
              placeholder='•••••••••'
              type='password'
              id='oldPassword'
              ref='oldPasswordInputRef'
            }}}
            {{{InlineInput
              label='Новый пароль'
              placeholder='•••••••••'
              type='password'
              id='newPassword'
              ref='newPasswordInputRef'
            }}}
            {{{InlineInput
              label='Повторите новый пароль'
              placeholder='•••••••••'
              type='password'
              id='rePassword'
              ref='repasswordInputRef'
            }}}
          </ul>
          <div class="profile__button">
            {{{Button text="Сохранить" onClick=onSubmit}}}
          </div>
        </div>
      </main>
    `
  }
}
