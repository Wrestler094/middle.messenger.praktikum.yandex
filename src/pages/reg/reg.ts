import Block from 'core/Block'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'
import './reg.css'

export class RegPage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => { this.onSubmit() }
    })
  }

  onSubmit (): void {
    const emailElement = this._element?.querySelector('input[name="email"]') as HTMLInputElement
    const loginElement = this._element?.querySelector('input[name="login"]') as HTMLInputElement
    const firstNameElement = this._element?.querySelector('input[name="first_name"]') as HTMLInputElement
    const secondNameElement = this._element?.querySelector('input[name="second_name"]') as HTMLInputElement
    const phoneElement = this._element?.querySelector('input[name="phone"]') as HTMLInputElement
    const passwordElement = this._element?.querySelector('input[name="password"]') as HTMLInputElement
    const repasswordElement = this._element?.querySelector('input[name="repassword"]') as HTMLInputElement

    let isFormValid = true
    const [
      emailError,
      loginError,
      firstNameError,
      secondNameError,
      phoneError,
      passwordError,
      repasswordError
    ] = validateForm([
      { type: ValidateRuleType.Email, value: emailElement.value },
      { type: ValidateRuleType.Login, value: loginElement.value },
      { type: ValidateRuleType.FirstName, value: firstNameElement.value },
      { type: ValidateRuleType.SecondName, value: secondNameElement.value },
      { type: ValidateRuleType.Phone, value: phoneElement.value },
      { type: ValidateRuleType.Password, value: passwordElement.value },
      { type: ValidateRuleType.Repassword, value: repasswordElement.value, value2: passwordElement.value }
    ])

    if (emailError !== '') {
      // @ts-expect-error
      this.refs.emailInputRef.refs.inputErrorRef.setProps({ text: emailError })
      isFormValid = false
    }

    if (loginError !== '') {
      // @ts-expect-error
      this.refs.loginInputRef.refs.inputErrorRef.setProps({ text: loginError })
      isFormValid = false
    }

    if (firstNameError !== '') {
      // @ts-expect-error
      this.refs.firstNameInputRef.refs.inputErrorRef.setProps({ text: firstNameError })
      isFormValid = false
    }

    if (secondNameError !== '') {
      // @ts-expect-error
      this.refs.secondNameInputRef.refs.inputErrorRef.setProps({ text: secondNameError })
      isFormValid = false
    }

    if (phoneError !== '') {
      // @ts-expect-error
      this.refs.phoneInputRef.refs.inputErrorRef.setProps({ text: phoneError })
      isFormValid = false
    }

    if (passwordError !== '') {
      // @ts-expect-error
      this.refs.passwordInputRef.refs.inputErrorRef.setProps({ text: passwordError })
      isFormValid = false
    }

    if (repasswordError !== '') {
      // @ts-expect-error
      this.refs.repasswordInputRef.refs.inputErrorRef.setProps({ text: repasswordError })
      isFormValid = false
    }

    if (isFormValid) {
      console.log({
        email: emailElement.value,
        login: loginElement.value,
        firstName: firstNameElement.value,
        secondName: secondNameElement.value,
        phone: phoneElement.value,
        password: passwordElement.value,
        repassword: repasswordElement.value
      })
    }
  }

  render (): string {
    // language=hbs
    return `
      <main class="centered-wrapper">
        <form class="reg-form">
          <h1 class="reg-form__header">Регистрация</h1>
          <div class="reg-form__fields">
            {{{Input
              type='email'
              id='email'
              placeholder='Почта'
              label=''
              ref='emailInputRef'
            }}}
            {{{Input
              type='text'
              id='login'
              placeholder='Логин'
              label=''
              ref='loginInputRef'
            }}}
            {{{Input
              type='text'
              id='first_name'
              placeholder='Имя'
              label=''
              ref='firstNameInputRef'
            }}}
            {{{Input
              type='text'
              id='second_name'
              placeholder='Фамилия'
              label=''
              ref='secondNameInputRef'
            }}}
              {{{Input
                type='tel'
                id='phone'
                placeholder='Телефон'
                label=''
                ref='phoneInputRef'
              }}}
              {{{Input
                type='password'
                id='password'
                placeholder='Пароль'
                label=''
                ref='passwordInputRef'
              }}}
              {{{Input
                type='password'
                id='repassword'
                placeholder='Пароль (ещё раз)'
                label=''
                ref='repasswordInputRef'
              }}}
          </div>
          {{{Button text="Зарегистрироваться" onClick=onSubmit}}}
          {{{Link text="Войти" to="/auth"}}}
        </form>
      </main>
    `
  }
}
