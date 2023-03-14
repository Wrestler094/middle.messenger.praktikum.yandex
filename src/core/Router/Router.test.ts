import { Block, Route, Router } from 'core'

export class TestPage extends Block<Record<string, any>> {
  static componentName = 'TestPage'

  protected render (): string {
    return '<main class="centered-wrapper">test</main>'
  }
}

document.body.innerHTML = '<div id="app"></div>'
const router = Router

describe('Router tests', () => {
  test('Router.use() should return Router instance', () => {
    const result = router.use('/', TestPage)
    expect(result).toEqual(router)
  })

  test('Router.go() change history', () => {
    router
      .use('/test', TestPage)
      .start()

    expect(window.history.length).toBe(1)
    expect(window.location.pathname).toEqual('/')

    router.go('/test')

    expect(window.history.length).toBe(2)
    expect(window.location.pathname).toEqual('/test')
  })

  test('Router.go() render page', () => {
    router
      .use('/test', TestPage)
      .start()

    router.go('/test')

    expect(document.querySelector('.centered-wrapper')?.textContent).toEqual('test')
  })

  test('getRoute return Route instance', () => {
    router
      .use('/test', TestPage)
      .start()

    expect(router.getRoute('/test')).toBeInstanceOf(Route)
  })
})

describe('Route tests', () => {
  test('route should be protect', () => {
    router.use('/protect-test', TestPage, true).start()
    expect(router.getRoute('/protect-test')?.isProtect()).toEqual(true)
  })

  test('route should not be protect', () => {
    router.use('/not-protect-test', TestPage).start()
    expect(router.getRoute('/not-protect-test')?.isProtect()).toEqual(false)
  })

  test('route should match', () => {
    router.use('/test', TestPage).start()
    expect(router.getRoute('/test')?.match('/anything')).toEqual(false)
  })

  test('route should not match with wrong string', () => {
    router.use('/test', TestPage).start()
    expect(router.getRoute('/test')?.match('/test')).toEqual(true)
  })
})
