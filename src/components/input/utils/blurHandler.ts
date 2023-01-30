import { validateForm, ValidateRuleType } from 'helpers/validateForm'

export default function blurHandler (evt: FocusEvent, ctx: Record<string, any>): void {
  const evtTarget = evt.target as HTMLInputElement
  const inputType: ValidateRuleType = ctx.props.id as ValidateRuleType
  const [error] = validateForm([{
    type: inputType,
    value: evtTarget.value
  }])

  ctx.refs.inputErrorRef.setProps({ text: error })

  if (evtTarget.value === '') {
    ctx.refs.inputLabelRef.setProps({ text: null })
    ctx.refs.inputFieldRef.setProps({ placeholder: ctx.props.placeholder })
  }
}
