import { Socket } from 'core'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

export default function submitHandler (evt: SubmitEvent, ctx: Record<string, any>): void {
  evt.preventDefault()

  const messageElement = ctx._element?.querySelector('input[name="message"]') as HTMLInputElement
  const [messageError] = validateForm([
    { type: ValidateRuleType.Message, value: messageElement.value }
  ])

  if (messageError !== '') {
    ctx.refs.messageBoxErrorRef.setProps({ error: messageError })
  }

  if (messageError === '') {
    Socket.sendMessage(messageElement.value)

    ctx.refs.messageBoxFieldRef.setProps({
      onInput: ctx.refs.messageBoxFieldRef.props.events.input
    })
    ctx.refs.messageBoxFieldRef._element.focus()
  }
}
