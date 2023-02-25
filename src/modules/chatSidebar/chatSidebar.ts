import { Block, Store } from 'core'
import { withStore } from 'helpers/withStore'
import { chatService } from 'services/chatService'
import './chatSidebar.css'

class ChatSidebar extends Block<Record<string, never>> {
  constructor (props: {}) {
    super(props)

    // @ts-expect-error
    if (Store.getState().chats == null) {
      void chatService.getChats()
    } else {
      // @ts-expect-error
      this.setProps({ ...this.props, store: Store.getState() })
    }
  }

  static componentName = 'ChatSidebar'

  _getChatTime (message: string): string {
    if (isNaN(Date.parse(message))) {
      return message
    }

    const messageDate = Date.parse(message)
    const currentDate = Date.now()
    const diff = currentDate - messageDate

    if (diff / 60 / 1000 < 59) {
      return String(Math.round(diff / 60 / 1000)) + 'm'
    } else if (diff / 60 / 60 / 1000 < 23) {
      return String(Math.round(diff / 60 / 60 / 1000)) + 'h'
    } else {
      return String(Math.round(diff / 24 / 60 / 60 / 1000)) + 'd'
    }
  }

  protected render (): string {
    // @ts-expect-error
    const chats = this.props.store.chats

    if (chats?.length > 0) {
      // TODO: Дописать и вынести типизацию чата
      chats.forEach((chat: {
        last_message: {
          time: string
          content: string
        }
      }) => {
        // TODO: Check for active
        // console.log(Store.getState().activeChat)
        // chat.active = true

        if (chat.last_message != null) {
          chat.last_message.time = this._getChatTime(chat.last_message.time)
          if (chat.last_message.content.length > 50) {
            chat.last_message.content = `${chat.last_message.content.slice(0, 50)}...`
          }
        }
      })
    }

    // language=hbs
    return `
      <div class="chat-sidebar">
        {{{SidebarHeader}}}
        <div class="chat-sidebar__search">
          {{{SidebarSearch}}}
        </div>
        <ul class="chat-sidebar__chat-list">
          {{#each store.chats}}
            {{#if this.last_message}}
              {{{SidebarChat
                id=id
                title=title
                avatar=avatar
                active=active
                lastMessage=last_message.content
                time=last_message.time
                unreadMessages=unread_count
              }}}
            {{else}}
              {{{SidebarChat
                id=id
                title=title
                active=active
                avatar=avatar
                lastMessage='В чате нет ни одного сообщения'
              }}}
            {{/if}}
          {{/each}}
        </ul>
      </div>
    `
  }
}

// @ts-expect-error
const ComposedChatSidebar = withStore(ChatSidebar)
export { ComposedChatSidebar as ChatSidebar }
