import Block from 'core/Block'

export class ServerErrorPage extends Block {
  render (): string {
    // language=hbs
    return `
      <main class="centered-wrapper">
        <h1 class="error-template__header">500</h1>
        <h2 class="error-template__subheader">Мы уже фиксим</h2>
        {{{Link text='Назад к чатам' to='/'}}}
      </main>
    `
  }
}
