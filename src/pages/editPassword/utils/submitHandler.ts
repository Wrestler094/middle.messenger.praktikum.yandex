import { validateForm, ValidateRuleType } from 'helpers/validateForm'
import { userService } from 'services/userService'

export default function submitHandler (evt: SubmitEvent, ctx: Record<string, any>): void {
  evt.preventDefault()

  const oldPasswordElement = ctx._element?.querySelector('input[name="oldPassword"]') as HTMLInputElement
  const newPasswordElement = ctx._element?.querySelector('input[name="newPassword"]') as HTMLInputElement
  const repasswordElement = ctx._element?.querySelector('input[name="repassword"]') as HTMLInputElement

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
    ctx.refs.oldPasswordInputRef.refs.inlineInputErrorRef.setProps({ error: oldPasswordError })
    isFormValid = false
  }

  if (newPasswordError !== '') {
    ctx.refs.newPasswordInputRef.refs.inlineInputErrorRef.setProps({ error: newPasswordError })
    isFormValid = false
  }

  if (repasswordError !== '') {
    ctx.refs.repasswordInputRef.refs.inlineInputErrorRef.setProps({ error: repasswordError })
    isFormValid = false
  }

  if (isFormValid) {
    void userService.editPassword({
      oldPassword: oldPasswordElement.value,
      newPassword: newPasswordElement.value,
      repassword: repasswordElement.value
    })
  }
}
