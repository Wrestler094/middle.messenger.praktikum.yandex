import { Block } from 'core'

export class TestPage extends Block<Record<string, any>> {
  static componentName = 'TestPage'

  protected render (): string {
    return '<main class="centered-wrapper">test</main>'
  }
}

const testPage = new TestPage()

describe('Block tests', () => {
  test('should return element tagname', () => {
    expect(testPage.element?.tagName).toEqual('MAIN')
  })

  test('should return element with class', () => {
    expect(testPage.element?.getAttribute('class')).toEqual('centered-wrapper')
  })

  test('should return element with content', () => {
    expect(testPage.element?.innerHTML).toEqual('test')
  })

  test('should set new props', () => {
    testPage.setProps({ test: 'test' })
    // @ts-expect-error TS2445: Property 'props' is protected
    expect(testPage.props.test).toEqual('test')
  })

  test('should add display:none to element', () => {
    testPage.hide()
    expect(testPage.element?.style.display).toEqual('none')
  })

  test('should add display:block to element', () => {
    testPage.show()
    expect(testPage.element?.style.display).toEqual('block')
  })
})
