import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import { userService } from 'services/userService'

export default function submitHandler (evt: SubmitEvent, ctx: Record<string, any>): void {
  evt.preventDefault()

  const emailElement = ctx._element?.querySelector('input[name="email"]') as HTMLInputElement
  const loginElement = ctx._element?.querySelector('input[name="login"]') as HTMLInputElement
  const firstNameElement = ctx._element?.querySelector('input[name="first_name"]') as HTMLInputElement
  const secondNameElement = ctx._element?.querySelector('input[name="second_name"]') as HTMLInputElement
  const displayNameElement = ctx._element?.querySelector('input[name="display_name"]') as HTMLInputElement
  const phoneElement = ctx._element?.querySelector('input[name="phone"]') as HTMLInputElement

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
    ctx.refs.emailInputRef.refs.inlineInputErrorRef.setProps({ error: emailError })
    isFormValid = false
  }

  if (loginError !== '') {
    ctx.refs.loginInputRef.refs.inlineInputErrorRef.setProps({ error: loginError })
    isFormValid = false
  }

  if (firstNameError !== '') {
    ctx.refs.firstNameInputRef.refs.inlineInputErrorRef.setProps({ error: firstNameError })
    isFormValid = false
  }

  if (secondNameError !== '') {
    ctx.refs.secondNameInputRef.refs.inlineInputErrorRef.setProps({ error: secondNameError })
    isFormValid = false
  }

  if (displayNameError !== '') {
    ctx.refs.displayNameInputRef.refs.inlineInputErrorRef.setProps({ error: displayNameError })
    isFormValid = false
  }

  if (phoneError !== '') {
    ctx.refs.phoneInputRef.refs.inlineInputErrorRef.setProps({ error: phoneError })
    isFormValid = false
  }

  if (isFormValid) {
    void userService.editProfile({
      email: emailElement.value,
      login: loginElement.value,
      first_name: firstNameElement.value,
      second_name: secondNameElement.value,
      display_name: displayNameElement.value,
      phone: phoneElement.value
    })
  }
}
