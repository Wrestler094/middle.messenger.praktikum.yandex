export default function focusHandler (evt: FocusEvent, ctx: Record<string, any>): void {
  const evtTarget = evt.target as HTMLInputElement

  if (evtTarget.placeholder !== '') {
    ctx.refs.inputLabelRef.setProps({ text: ctx.props.placeholder })
    ctx.refs.inputFieldRef.setProps({ placeholder: null })

    const inputElem = ctx._element?.querySelector('#' + String(ctx.props.id)) as HTMLInputElement
    inputElem.focus()
  }
}
