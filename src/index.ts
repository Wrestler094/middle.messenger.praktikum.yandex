import { registerComponent, renderDOM, Router, Store } from 'core'
import { initAppService } from 'services/initAppService'

// region Import pages
import AuthPage from './pages/auth'
import RegPage from './pages/reg'
import ProfilePage from './pages/profile'
import EditProfilePage from './pages/editProfile'
import EditPasswordPage from './pages/editPassword'
import ChatPage from './pages/chat'
import ServerErrorPage from './pages/5xx'
import NotFoundPage from './pages/404'
// endregion

import './style.css'

// region Import components
import AppLoader from './components/appLoader'
import Avatar from './components/avatar'
import AvatarModal from './components/avatar/__modal'
import Modal from './components/modal'
import Button from './components/button'
import Link from './components/link'
import LinkBack from './components/linkBack'
import ControlLink from './components/controlLink'
import Input from './components/input'
import InputLabel from './components/input/__label'
import InputField from './components/input/__field'
import InputError from './components/input/__error'
import InlineInput from './components/inlineInput'
import InlineInputLabel from './components/inlineInput/__label'
import InlineInputField from './components/inlineInput/__field'
import InlineInputError from './components/inlineInput/__error'
// endregion

// region Import modules
// ChatSidebar
import ChatSidebar from './modules/chatSidebar'
import SidebarHeader from './modules/chatSidebar/__header'
import SidebarSearch from './modules/chatSidebar/__search'
import SidebarChat from './modules/chatSidebar/__chat'
import ChatSidebarModal from './modules/chatSidebar/__modal'
// ChatMainWindow
import ChatMainWindow from './modules/chatMainWindow'
import MainWindowHeader from './modules/chatMainWindow/__header'
import MainWindowContent from './modules/chatMainWindow/__content'
import MainWindowMessage from './modules/chatMainWindow/__message'
import RemoveUserModal from './modules/chatMainWindow/__modal/--removeUser'
import AddUserModal from './modules/chatMainWindow/__modal/--addUser'
// MessageBox
import MessageBox from './modules/messageBox'
import MessageBoxError from './modules/messageBox/__error'
import MessageBoxField from './modules/messageBox/__field'
import MessageBoxButton from './modules/messageBox/__sendButton'
import { type BlockConstructable } from './core/registerComponent'
// endregion

// region Register components
registerComponent(AppLoader)
registerComponent(Avatar as unknown as BlockConstructable<unknown>)
registerComponent(AvatarModal)
registerComponent(Modal)
registerComponent(Button)
registerComponent(Link)
registerComponent(LinkBack)
registerComponent(ControlLink)
registerComponent(Input)
registerComponent(InputLabel)
registerComponent(InputField)
registerComponent(InputError)
registerComponent(InlineInput)
registerComponent(InlineInputLabel)
registerComponent(InlineInputField)
registerComponent(InlineInputError)
// endregion

// region Register modules
// ChatSidebar
registerComponent(ChatSidebar as unknown as BlockConstructable<unknown>)
registerComponent(SidebarHeader)
registerComponent(SidebarSearch)
registerComponent(SidebarChat)
registerComponent(ChatSidebarModal)
// ChatMainWindow
registerComponent(ChatMainWindow as unknown as BlockConstructable<unknown>)
registerComponent(MainWindowHeader)
registerComponent(MainWindowContent as unknown as BlockConstructable<unknown>)
registerComponent(MainWindowMessage)
registerComponent(RemoveUserModal)
registerComponent(AddUserModal)
// MessageBox
registerComponent(MessageBox)
registerComponent(MessageBoxError)
registerComponent(MessageBoxField)
registerComponent(MessageBoxButton)
// endregion

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Router
  enum Routes {
    MAIN = '/',
    REG = '/sign-up',
    PROFILE = '/settings',
    EDIT_PROFILE = '/edit-profile',
    EDIT_PASSWORD = '/edit-password',
    CHAT = '/messenger',
    SERVER_ERROR = '/5xx',
    NOT_FOUND = '/404',
  }

  Router
    .use(Routes.MAIN, AuthPage)
    .use(Routes.REG, RegPage)
    .use(Routes.PROFILE, ProfilePage, true)
    .use(Routes.EDIT_PROFILE, EditProfilePage, true)
    .use(Routes.EDIT_PASSWORD, EditPasswordPage, true)
    .use(Routes.CHAT, ChatPage, true)
    .use(Routes.SERVER_ERROR, ServerErrorPage)
    .use(Routes.NOT_FOUND, NotFoundPage)

  // Debug print
  Store.on('changed', (prevState, nextState) => {
    console.log(
      '%cstore updated',
      'background: #222; color: #bada55',
      prevState, nextState
    )
  })

  // Render Loader
  renderDOM('#app', new AppLoader())

  // Invoke InitApp service
  void initAppService()
})
