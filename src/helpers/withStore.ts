import { Block, Store } from 'core'

interface WithStateProps { store: AppState }

export function withStore<P extends WithStateProps> (WrappedBlock: Block<P>): Block<Omit<P, 'store'>> {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    // @ts-expect-error
    public static componentName = WrappedBlock.componentName

    constructor (props: P) {
      super({ ...props, store: Store })
    }

    // __onChangeStoreCallback = (): void => {
    //   // @ts-expect-error this is not typed
    //   this.setProps({ ...this.props, store: Store.getState() })
    // }

    componentDidMount (props: P): void {
      super.componentDidMount(props)
      // @ts-expect-error
      Store.on('changed', this.__onChangeStoreCallback)
    }

    componentWillUnmount (): void {
      super.componentWillUnmount()
      // @ts-expect-error
      Store.off('changed', this.__onChangeStoreCallback)
    }
  } as Block<Omit<P, 'store'>>
}
