import { Block, Store } from 'core'
import { withStore } from 'helpers/withStore'
import defaultAvatar from 'static/default-avatar.png'
import './avatar.css'

interface AvatarClassProps {
  user: User
  avatar: string
  events: {
    click: (evt: MouseEvent) => void
  }
}

interface AvatarProps {
  store: typeof Store
  onClick: (evt: MouseEvent) => void
}

class Avatar extends Block<AvatarClassProps> {
  constructor ({ store, onClick }: AvatarProps) {
    const user = (store.getState() as AppState)?.user as User
    const avatar = user?.avatar != null ? 'https://ya-praktikum.tech/api/v2/resources' + user?.avatar : defaultAvatar

    super({ user, avatar, events: { click: onClick } })
  }

  static componentName = 'Avatar'

  __onChangeStoreCallback = (): void => {
    const avatar = (Store.getState()?.user as unknown as User)?.avatar
    this.props.avatar = avatar != null ? 'https://ya-praktikum.tech/api/v2/resources' + avatar : defaultAvatar
    this.setProps({ ...this.props })
  }

  protected render (): string {
    // language=hbs
    return `
      <div class="avatar-wrapper">
        <img class="avatar" src="{{{avatar}}}" alt="Аватар пользователя">
      </div>
    `
  }
}

// @ts-expect-error Block<WithStateProps>
const ComposedAvatar = withStore(Avatar)
export { ComposedAvatar as Avatar }
