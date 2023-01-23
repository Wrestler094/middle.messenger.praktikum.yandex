import Block from 'core/Block'
import attach from 'static/attach.png'
import send from 'static/send.png'
import './chatMainWindow__messageBox.css'

export class MainWindowMessageBox extends Block {
  render (): string {
    // language=hbs
    return `
      <div class="message-box">
        <img class="message-box__attach" src="${attach}" alt="Прикрепление файлов">
        <div class="message-box__message-wrapper">
          <label class="message-box__field-label">
            <input
              class="message-box__field"
              name="message"
              id="message"
              type="text"
              placeholder="Введите сообщение"
            >
          </label>
          <img class="message-box__send-image" src="${send}" alt="Отправка сообщения">
        </div>
      </div>
    `
  }
}
