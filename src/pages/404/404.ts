import { Block } from 'core'

export class NotFoundPage extends Block<Record<string, never>> {
  static componentName = 'NotFoundPage'

  protected render (): string {
    // language=hbs
    return `
      <main class="centered-wrapper">
        <h1 class="error-template__header">404</h1>
        <h2 class="error-template__subheader">Не туда попали</h2>
        {{{Link text='Назад к чатам' to='/messenger'}}}
      </main>
    `
  }
}
