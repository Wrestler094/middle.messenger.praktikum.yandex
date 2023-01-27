import Block from 'core/Block'
import './chatSidebar.css'

export class ChatSidebar extends Block {
  static componentName = 'ChatSidebar'

  protected render (): string {
    // language=hbs
    return `
      <div class="chat-sidebar">
        {{{SidebarHeader}}}
        <div class="chat-sidebar__search">
          {{{SidebarSearch}}}
        </div>
        <ul class="chat-sidebar__chat-list">
          {{{SidebarChat name='Elmer Laverty' time='12m' unreadMessages=1}}}
          {{{SidebarChat active=true name='Florencio Dorrance' time='1h'}}}
          {{{SidebarChat name='Geoffrey Mott' time='24m' unreadMessages=4}}}
          {{{SidebarChat name='Lavern Laboy' time='1m' unreadMessages=14}}}
          {{{SidebarChat name='Titus Kitamura' time='2d'}}}
        </ul>
      </div>
    `
  }
}
