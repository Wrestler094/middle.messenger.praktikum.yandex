import { Block, Store } from 'core'
import { withStore } from 'helpers/withStore'
import './chatMainWindow__content.css'

class MainWindowContent extends Block<Record<string, never>> {
  static componentName = 'MainWindowContent'

  __onChangeStoreCallback = (): void => {
    // @ts-expect-error this is not typed
    this.setProps({ ...this.props, store: Store.getState() })
  }

  protected render (): string {
    // @ts-expect-error
    const messages = this.props.store.messages

    if (messages?.length > 0) {
      messages.forEach((message: any) => {
        // @ts-expect-error
        message.author = message.user_id === this.props.store.user.id
      })

      // language=hbs
      return `
        <div class="main-chat__content">
          {{#each store.messages}}
              {{{MainWindowMessage
                author=author 
                messages=this.content
              }}}
          {{/each}}
        </div>
      `
    } else {
      // language=hbs
      return `
        <div class="main-chat__content--empty">
          В чате нет ни одного сообщения
        </div>
      `
    }
  }
}

// @ts-expect-error
const ComposedMainWindowContent = withStore(MainWindowContent)
export { ComposedMainWindowContent as MainWindowContent }
