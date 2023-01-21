import { renderDOM, registerComponent } from './core'
import AllPagesPage from './pages/allPages'
import AuthPage from './pages/auth'
import RegPage from './pages/reg'
import ProfilePage from './pages/profile'
import NotFoundPage from './pages/404'
import ServerErrorPage from './pages/5xx'
import EditProfilePage from './pages/editProfile'
import EditPasswordPage from './pages/editPassword'

import './style.css'

import Button from './components/button'
import Link from './components/link'
import Input from './components/input'
import InputLabel from './components/input/inputLabel'
import InputField from './components/input/inputField'
import InputError from './components/input/inputError'
import InlineInput from './components/inlineInput'

registerComponent(Button)
registerComponent(Link)
registerComponent(Input)
registerComponent(InputLabel)
registerComponent(InputField)
registerComponent(InputError)
registerComponent(InlineInput)

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
    case '/reg': {
      renderDOM(new RegPage())
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
