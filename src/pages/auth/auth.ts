import Block from 'core/Block'
import submitHandler from './utils/submitHandler'
import './auth.css'

interface AuthPageProps {
  onSubmit: (evt: SubmitEvent) => void
}

export class AuthPage extends Block<AuthPageProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) }
    })
  }

  static componentName = 'AuthPage'

  protected render (): string {
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
            {{{Button type="submit" text="Войти" onClick=onSubmit}}}
            {{{Link text="Нет аккаунта?" to="/reg"}}}
        </form>
      </main>
    `
  }
}
