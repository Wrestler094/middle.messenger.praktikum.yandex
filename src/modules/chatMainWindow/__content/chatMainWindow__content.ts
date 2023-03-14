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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const messages = (this.props.store as AppState).messages!

    if (messages?.length > 0) {
      messages.forEach((message: any) => {
        message.author = message.user_id === (this.props.store as AppState).user?.id
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

// @ts-expect-error Block<WithStateProps>
const ComposedMainWindowContent = withStore(MainWindowContent)
export { ComposedMainWindowContent as MainWindowContent }
