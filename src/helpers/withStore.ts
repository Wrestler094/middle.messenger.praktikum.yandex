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

    __onChangeStoreCallback = (): void => {
      /**
        * TODO: проверить что стор реально обновлен
        * и прокидывать не целый стор, а необходимые поля
        * с помощью метода mapStateToProps
        */
      // @ts-expect-error this is not typed
      this.setProps({ ...this.props, store: Store.getState() })
    }

    componentDidMount (props: P): void {
      super.componentDidMount(props)
      Store.on('changed', this.__onChangeStoreCallback)
    }

    componentWillUnmount (): void {
      super.componentWillUnmount()
      Store.off('changed', this.__onChangeStoreCallback)
    }
  } as Block<Omit<P, 'store'>>
}
