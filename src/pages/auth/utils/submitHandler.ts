import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import { authService } from 'services/authService'

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
    void authService.login({
      login: loginElement.value,
      password: passwordElement.value
    })
  }
}
