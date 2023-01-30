import Block from 'core/Block'
import './chatMainWindow__content.css'

export class MainWindowContent extends Block<Record<string, never>> {
  static componentName = 'MainWindowContent'

  protected render (): string {
    // language=hbs
    return `
      <div class="main-chat__content">
        {{{MainWindowMessage 
          author=false 
          messages='["omg, this is amazing", "perfect! ✅", "Wow, this is really epic"]'}}}
        {{{MainWindowMessage 
          author=true 
          messages='["How are you?"]'}}}
        {{{MainWindowMessage 
          author=false 
          messages='["just ideas for next time", "I\\'ll be there in 2 mins ⏰"]'}}}
        {{{MainWindowMessage 
          author=true 
          messages='["woohoooo", "Haha oh man", "Haha that\\'s terrifying 😂"]'}}}
        {{{MainWindowMessage 
          author=false 
          messages='["aww", "omg, this is amazing", "woohoooo 🔥"]'}}}
      </div>
    `
  }
}
