import Block from 'core/Block'
import submitHandler from './utils/submitHandler'
import './reg.css'

interface RegPageProps {
  onSubmit: (evt: SubmitEvent) => void
}

export class RegPage extends Block<RegPageProps> {
  constructor () {
    super({
      onSubmit: (evt: SubmitEvent) => { submitHandler(evt, this) }
    })
  }

  static componentName = 'RegPage'

  protected render (): string {
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
          {{{Button type="submit" text="Зарегистрироваться" onClick=onSubmit}}}
          {{{Link text="Войти" to="/auth"}}}
        </form>
      </main>
    `
  }
}
