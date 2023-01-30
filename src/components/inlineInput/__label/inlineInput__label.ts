import Block from 'core/Block'

interface InlineInputLabelProps {
  id: string
  label: string
}

export class InlineInputLabel extends Block<InlineInputLabelProps> {
  static componentName = 'InlineInputLabel'

  protected render (): string {
    // language=hbs
    return `
      <label for="{{id}}">{{label}}</label>
    `
  }
}
