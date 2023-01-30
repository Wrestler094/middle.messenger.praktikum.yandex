export default function focusHandler (evt: FocusEvent): void {
  const evtTarget = evt.target as HTMLInputElement

  if (evtTarget.placeholder !== '') {
    this.refs.inputLabelRef.setProps({ text: this.props.placeholder })
    this.refs.inputFieldRef.setProps({ placeholder: null })

    const inputElem = this._element?.querySelector('#' + String(this.props.id)) as HTMLInputElement
    inputElem.focus()
  }
}
