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
    const oldPasswordElement = this._element?.querySelector('input[name="oldPassword"]') as HTMLInputElement
    const newPasswordElement = this._element?.querySelector('input[name="newPassword"]') as HTMLInputElement
    const repasswordElement = this._element?.querySelector('input[name="repassword"]') as HTMLInputElement

    let isFormValid = true
    const [
      oldPasswordError,
      newPasswordError,
      repasswordError
    ] = validateForm([
      { type: ValidateRuleType.OldPassword, value: oldPasswordElement.value },
      { type: ValidateRuleType.NewPassword, value: newPasswordElement.value },
      { type: ValidateRuleType.Repassword, value: repasswordElement.value, value2: newPasswordElement.value }
    ])

    if (oldPasswordError !== '') {
      this.refs.oldPasswordInputRef.refs.inlineInputErrorRef.setProps({ error: oldPasswordError })
      isFormValid = false
    }

    if (newPasswordError !== '') {
      this.refs.newPasswordInputRef.refs.inlineInputErrorRef.setProps({ error: newPasswordError })
      isFormValid = false
    }

    if (repasswordError !== '') {
      this.refs.repasswordInputRef.refs.inlineInputErrorRef.setProps({ error: repasswordError })
      isFormValid = false
    }

    if (isFormValid) {
      console.log({
        oldPassword: oldPasswordElement.value,
        newPassword: newPasswordElement.value,
        repassword: repasswordElement.value
      })
    }
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
              id='repassword'
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
