import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

export class EditProfilePage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => {
        this.onSubmit()
      }
    })
  }

  onSubmit (): void {
    const emailElement = this._element?.querySelector('input[name="email"]') as HTMLInputElement
    const loginElement = this._element?.querySelector('input[name="login"]') as HTMLInputElement
    const firstNameElement = this._element?.querySelector('input[name="first_name"]') as HTMLInputElement
    const secondNameElement = this._element?.querySelector('input[name="second_name"]') as HTMLInputElement
    const displayNameElement = this._element?.querySelector('input[name="display_name"]') as HTMLInputElement
    const phoneElement = this._element?.querySelector('input[name="phone"]') as HTMLInputElement

    let isFormValid = true
    const [
      emailError,
      loginError,
      firstNameError,
      secondNameError,
      displayNameError,
      phoneError
    ] = validateForm([
      { type: ValidateRuleType.Email, value: emailElement.value },
      { type: ValidateRuleType.Login, value: loginElement.value },
      { type: ValidateRuleType.FirstName, value: firstNameElement.value },
      { type: ValidateRuleType.SecondName, value: secondNameElement.value },
      { type: ValidateRuleType.DisplayName, value: displayNameElement.value },
      { type: ValidateRuleType.Phone, value: phoneElement.value }
    ])

    if (emailError !== '') {
      this.refs.emailInputRef.refs.inlineInputErrorRef.setProps({ error: emailError })
      isFormValid = false
    }

    if (loginError !== '') {
      this.refs.loginInputRef.refs.inlineInputErrorRef.setProps({ error: loginError })
      isFormValid = false
    }

    if (firstNameError !== '') {
      this.refs.firstNameInputRef.refs.inlineInputErrorRef.setProps({ error: firstNameError })
      isFormValid = false
    }

    if (secondNameError !== '') {
      this.refs.secondNameInputRef.refs.inlineInputErrorRef.setProps({ error: secondNameError })
      isFormValid = false
    }

    if (displayNameError !== '') {
      this.refs.displayNameInputRef.refs.inlineInputErrorRef.setProps({ error: displayNameError })
      isFormValid = false
    }

    if (phoneError !== '') {
      this.refs.phoneInputRef.refs.inlineInputErrorRef.setProps({ error: phoneError })
      isFormValid = false
    }

    if (isFormValid) {
      console.log({
        email: emailElement.value,
        login: loginElement.value,
        firstName: firstNameElement.value,
        secondName: secondNameElement.value,
        displayName: displayNameElement.value,
        phone: phoneElement.value
      })
    }
  }

  protected render (): string {
    // language=hbs
    return `
      <main class="profile">
        <h1 class="visually-hidden">Настройки профиля</h1>
        {{{LinkBack to="/chat"}}}
        <div class="profile__data">
          {{{Avatar}}}
          <ul class="profile__edit-data">
            {{{InlineInput
              label='Почта'
              placeholder='pochta@yandex.ru'
              type='email'
              id='email'
              ref='emailInputRef'
            }}}
            {{{InlineInput
              label='Логин'
              placeholder='ivanivanov'
              type='text'
              id='login'
              ref='loginInputRef'
            }}}
            {{{InlineInput
              label='Имя'
              placeholder='Иван'
              type='text'
              id='first_name'
              ref='firstNameInputRef'
            }}}
            {{{InlineInput
              label='Фамилия'
              placeholder='Иванов'
              type='text'
              id='second_name'
              ref='secondNameInputRef'
            }}}
            {{{InlineInput
              label='Имя в чате'
              placeholder='Иван'
              type='text'
              id='display_name'
              ref='displayNameInputRef'
            }}}
            {{{InlineInput
              label='Телефон'
              placeholder='+7 (909) 967 30 30'
              type='tel'
              id='phone'
              ref='phoneInputRef'
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
