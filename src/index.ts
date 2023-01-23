import { renderDOM, registerComponent } from './core'

/* Import pages */
import AllPagesPage from './pages/allPages'
import AuthPage from './pages/auth'
import RegPage from './pages/reg'
import ProfilePage from './pages/profile'
import EditProfilePage from './pages/editProfile'
import EditPasswordPage from './pages/editPassword'
import ChatPage from './pages/chat'
import ServerErrorPage from './pages/5xx'
import NotFoundPage from './pages/404'

import './style.css'

/* Import components */
import Avatar from './components/avatar'
import Button from './components/button'
import Link from './components/link'
import LinkBack from './components/linkBack'
import Input from './components/input'
import InputLabel from './components/input/__label'
import InputField from './components/input/__field'
import InputError from './components/input/__error'
import InlineInput from './components/inlineInput'

/* Import modules */
// ChatSidebar
import ChatSidebar from './modules/chatSidebar'
import SidebarHeader from './modules/chatSidebar/__header'
import SidebarSearch from './modules/chatSidebar/__search'
import SidebarChat from './modules/chatSidebar/__chat'
// ChatMainWindow
import ChatMainWindow from './modules/chatMainWindow'
import MainWindowHeader from './modules/chatMainWindow/__header'
import MainWindowContent from './modules/chatMainWindow/__content'
import MainWindowMessageBox from './modules/chatMainWindow/__messageBox'

/* Register components */
registerComponent(Avatar)
registerComponent(Button)
registerComponent(Link)
registerComponent(LinkBack)
registerComponent(Input)
registerComponent(InputLabel)
registerComponent(InputField)
registerComponent(InputError)
registerComponent(InlineInput)

/* Register modules */
// ChatSidebar
registerComponent(ChatSidebar)
registerComponent(SidebarHeader)
registerComponent(SidebarSearch)
registerComponent(SidebarChat)
// ChatMainWindow
registerComponent(ChatMainWindow)
registerComponent(MainWindowHeader)
registerComponent(MainWindowContent)
registerComponent(MainWindowMessageBox)

document.addEventListener('DOMContentLoaded', () => {
  switch (window.location.pathname) {
    case '/': {
      renderDOM(new AllPagesPage())
      break
    }
    case '/auth': {
      renderDOM(new AuthPage())
      break
    }
    case '/reg': {
      renderDOM(new RegPage())
      break
    }
    case '/profile': {
      renderDOM(new ProfilePage())
      break
    }
    case '/edit-profile': {
      renderDOM(new EditProfilePage())
      break
    }
    case '/edit-password': {
      renderDOM(new EditPasswordPage())
      break
    }
    case '/chat': {
      renderDOM(new ChatPage())
      break
    }
    case '/5xx': {
      renderDOM(new ServerErrorPage())
      break
    }
    default: {
      renderDOM(new NotFoundPage())
      break
    }
  }
})
