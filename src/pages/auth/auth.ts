import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import './auth.css'

export class AuthPage extends Block {
  constructor () {
    super()

    this.setProps({
      onSubmit: () => { this.onSubmit() }
    })
  }

  onSubmit (): void {
    const loginElement = this._element?.querySelector('input[name="login"]') as HTMLInputElement
    const passwordElement = this._element?.querySelector('input[name="password"]') as HTMLInputElement

    const [loginError, passwordError] = validateForm([
      { type: ValidateRuleType.Login, value: loginElement.value },
      { type: ValidateRuleType.Password, value: passwordElement.value }
    ])

    if (loginError !== '') {
      // @ts-expect-error
      this.refs.loginInputRef.refs.inputErrorRef.setProps({ text: loginError })
    }

    if (passwordError !== '') {
      // @ts-expect-error
      this.refs.passwordInputRef.refs.inputErrorRef.setProps({ text: passwordError })
    }

    if ((loginError === '') && (passwordError === '')) {
      console.log({
        login: loginElement.value,
        password: passwordElement.value
      })
    }
  }

  render (): string {
    // language=hbs
    return `
      <main class="centered-wrapper">
        <form class="auth-form">
          <h1 class="auth-form__header">Вход</h1>
            <div class="auth-form__fields">
              {{{Input 
                type='text' 
                id='login'
                placeholder='Логин'
                label=''
                ref='loginInputRef'
              }}}
              {{{Input
                type='password'
                id='password'
                placeholder='Пароль'
                label=''
                ref='passwordInputRef'
              }}}
            </div>
            {{{Button text="Войти" onClick=onSubmit}}}
            {{{Link text="Нет аккаунта?" to="/reg"}}}
        </form>
      </main>
    `
  }
}