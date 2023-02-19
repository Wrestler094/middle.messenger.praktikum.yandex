import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import HTTPTransport from 'core/HTTPTransport'
import Router from 'core/Router'

export default function submitHandler (evt: SubmitEvent, ctx: Record<string, any>): void {
  evt.preventDefault()

  const loginElement = ctx._element?.querySelector('input[name="login"]') as HTMLInputElement
  const passwordElement = ctx._element?.querySelector('input[name="password"]') as HTMLInputElement

  const [loginError, passwordError] = validateForm([
    { type: ValidateRuleType.Login, value: loginElement.value },
    { type: ValidateRuleType.Password, value: passwordElement.value }
  ])

  if (loginError !== '') {
    ctx.refs.loginInputRef.refs.inputErrorRef.setProps({ text: loginError })
  }

  if (passwordError !== '') {
    ctx.refs.passwordInputRef.refs.inputErrorRef.setProps({ text: passwordError })
  }

  if ((loginError === '') && (passwordError === '')) {
    HTTPTransport.post('auth/signin', {
      data: {
        login: loginElement.value,
        password: passwordElement.value
      }
    })
      .then(res => {
        console.log(res)
        Router.go('/chat')
      }).catch(err => {
        console.log(err)
        console.log(err.reason)
      })
  }
}
