import { validateForm, ValidateRuleType } from 'helpers/validateForm'

export default function submitHandler (evt: SubmitEvent, ctx: Record<string, any>): void {
  evt.preventDefault()

  const emailElement = ctx._element?.querySelector('input[name="email"]') as HTMLInputElement
  const loginElement = ctx._element?.querySelector('input[name="login"]') as HTMLInputElement
  const firstNameElement = ctx._element?.querySelector('input[name="first_name"]') as HTMLInputElement
  const secondNameElement = ctx._element?.querySelector('input[name="second_name"]') as HTMLInputElement
  const phoneElement = ctx._element?.querySelector('input[name="phone"]') as HTMLInputElement
  const passwordElement = ctx._element?.querySelector('input[name="password"]') as HTMLInputElement
  const repasswordElement = ctx._element?.querySelector('input[name="repassword"]') as HTMLInputElement

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
    ctx.refs.emailInputRef.refs.inputErrorRef.setProps({ text: emailError })
    isFormValid = false
  }

  if (loginError !== '') {
    ctx.refs.loginInputRef.refs.inputErrorRef.setProps({ text: loginError })
    isFormValid = false
  }

  if (firstNameError !== '') {
    ctx.refs.firstNameInputRef.refs.inputErrorRef.setProps({ text: firstNameError })
    isFormValid = false
  }

  if (secondNameError !== '') {
    ctx.refs.secondNameInputRef.refs.inputErrorRef.setProps({ text: secondNameError })
    isFormValid = false
  }

  if (phoneError !== '') {
    ctx.refs.phoneInputRef.refs.inputErrorRef.setProps({ text: phoneError })
    isFormValid = false
  }

  if (passwordError !== '') {
    ctx.refs.passwordInputRef.refs.inputErrorRef.setProps({ text: passwordError })
    isFormValid = false
  }

  if (repasswordError !== '') {
    ctx.refs.repasswordInputRef.refs.inputErrorRef.setProps({ text: repasswordError })
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
