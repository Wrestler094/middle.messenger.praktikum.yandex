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
  store: AppState
  onClick: (evt: MouseEvent) => void
}

class Avatar extends Block<AvatarClassProps> {
  constructor ({ store, onClick }: AvatarProps) {
    // @ts-expect-error
    const user = store.getState()?.user
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const avatar = user?.avatar != null ? 'https://ya-praktikum.tech/api/v2/resources' + user?.avatar : defaultAvatar
    super({ user, avatar, events: { click: onClick } })
  }

  static componentName = 'Avatar'

  __onChangeStoreCallback = (): void => {
    // @ts-expect-error
    const avatar = Store.getState()?.user?.avatar
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
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

// @ts-expect-error
const ComposedAvatar = withStore(Avatar)
export { ComposedAvatar as Avatar }
