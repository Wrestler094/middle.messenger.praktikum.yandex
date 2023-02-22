import Block from 'core/Block'

export class AppLoader extends Block<Record<string, never>> {
  static componentName = 'AppLoader'

  protected render (): string {
    // language=hbs
    return `
      <main class="centered-wrapper">
          <h1 class="error-template__header">Loading...</h1>
      </main>
    `
  }
}
