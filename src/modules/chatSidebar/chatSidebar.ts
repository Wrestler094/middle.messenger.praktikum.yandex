import Block from 'core/Block'
import './chatSidebar.css'

export class ChatSidebar extends Block {
  render (): string {
    // language=hbs
    return `
      <div class="chat-sidebar">
        {{{SidebarHeader}}}
        <div class="chat-sidebar__search">
          {{{SidebarSearch}}}
        </div>
        <ul class="chat-sidebar__chat-list">
          {{{SidebarChat}}}
          {{{SidebarChat}}}
          {{{SidebarChat}}}
          {{{SidebarChat}}}
        </ul>
      </div>
    `
  }
}

//     {{> 'chats/chats'}}
//          <div class="chats">
//              {{> 'chatsHeader/chatsHeader' styles='chats__header'}}
//              <div class="chats__search">
//                  {{> 'search/search'}}
//              </div>
//              <ul class="chats__chat-list">
//                  {{> 'chat/chat' name='Elmer Laverty' time='12m'}}
//                  {{> 'chat/chat' name='Florencio Dorrance' time='1h'}}
//                  {{> 'chat/chat' active=true name='Geoffrey Mott' time='24m'}}
//                  {{> 'chat/chat' name='Lavern Laboy' time='1m'}}
//                  {{> 'chat/chat' name='Titus Kitamura' time='2d'}}
//              </ul>
//          </div>
