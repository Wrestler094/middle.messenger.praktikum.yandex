import { registerComponent } from './core'
import Router from 'core/Router'

/* Import pages */
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
import InlineInputLabel from './components/inlineInput/__label'
import InlineInputField from './components/inlineInput/__field'
import InlineInputError from './components/inlineInput/__error'

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
import MainWindowMessage from './modules/chatMainWindow/__message'
// MessageBox
import MessageBox from './modules/messageBox'
import MessageBoxError from './modules/messageBox/__error'
import MessageBoxField from './modules/messageBox/__field'
import MessageBoxButton from './modules/messageBox/__sendButton'

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
registerComponent(InlineInputLabel)
registerComponent(InlineInputField)
registerComponent(InlineInputError)

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
registerComponent(MainWindowMessage)
// MessageBox
registerComponent(MessageBox)
registerComponent(MessageBoxError)
registerComponent(MessageBoxField)
registerComponent(MessageBoxButton)

enum Routes {
  MAIN = '/',
  AUTH = '/auth',
  REG = '/reg',
  PROFILE = '/profile',
  EDIT_PROFILE = '/edit-profile',
  EDIT_PASSWORD = '/edit-password',
  CHAT = '/chat',
  SERVER_ERROR = '/5xx',
  NOT_FOUND = '/404',
}

Router
  .use(Routes.MAIN, AuthPage)
  .use(Routes.AUTH, AuthPage)
  .use(Routes.REG, RegPage)
  .use(Routes.PROFILE, ProfilePage)
  .use(Routes.EDIT_PROFILE, EditProfilePage)
  .use(Routes.EDIT_PASSWORD, EditPasswordPage)
  .use(Routes.CHAT, ChatPage)
  .use(Routes.SERVER_ERROR, ServerErrorPage)
  .use(Routes.NOT_FOUND, NotFoundPage)
  .start()
