import { Block, Store } from 'core'
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
  user: User
  avatar: string
  onClick: (evt: MouseEvent) => void
}

export class Avatar extends Block<AvatarClassProps> {
  constructor ({ onClick }: AvatarProps) {
    // @ts-expect-error
    const user = Store.getState()?.user
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

  componentDidMount (): void {
    super.componentDidMount()
    Store.on('changed', this.__onChangeStoreCallback)
  }

  componentWillUnmount (): void {
    super.componentWillUnmount()
    Store.off('changed', this.__onChangeStoreCallback)
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
