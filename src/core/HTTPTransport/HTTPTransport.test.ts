import { HTTPTransport } from 'core'
import { queryStringify } from './HTTPTransport'

describe('HTTPTransport tests', () => {
  test('should send GET request', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect.assertions(1)
    try {
      await HTTPTransport.get('chats')
    } catch (err) {
      expect(err.reason).toMatch('Cookie is not valid')
    }

    consoleSpy.mockRestore()
  })

  test('should send POST request', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect.assertions(1)
    try {
      await HTTPTransport.post('chats', { title: 'test' })
    } catch (err) {
      expect(err.reason).toMatch('Cookie is not valid')
    }

    consoleSpy.mockRestore()
  })

  test('should send PUT request', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect.assertions(1)
    try {
      await HTTPTransport.put('chats/users', { users: -1, chatId: -1 })
    } catch (err) {
      expect(err.reason).toMatch('Cookie is not valid')
    }

    consoleSpy.mockRestore()
  })

  test('should send DELETE request', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect.assertions(1)
    try {
      await HTTPTransport.delete('chats', { chatId: -1 })
    } catch (err) {
      expect(err.reason).toMatch('Cookie is not valid')
    }

    consoleSpy.mockRestore()
  })
})

describe('queryStringify tests', () => {
  test('queryStringify string', () => {
    const data = { test: 'test' }
    expect(queryStringify(data)).toBe('?test=test')
  })

  test('queryStringify number', () => {
    const data = { test: 1234 }
    expect(queryStringify(data)).toBe('?test=1234')
  })

  test('queryStringify boolean', () => {
    const data = { test: true }
    expect(queryStringify(data)).toBe('?test=true')
  })

  test('queryStringify array', () => {
    const data = { test: ['string1', 'string2'] }
    expect(queryStringify(data)).toBe('?test=string1,string2')
  })

  test('queryStringify empty array', () => {
    const data = { test: [] }
    expect(queryStringify(data)).toBe('?test=')
  })

  test('queryStringify object', () => {
    const data = { test: { test: 'test' } }
    expect(queryStringify(data)).toBe('?test=[object Object]')
  })

  test('queryStringify empty object', () => {
    const data = {}
    expect(queryStringify(data)).toBe('?')
  })

  test('queryStringify multiple data', () => {
    const data = { test: { test: 'test' }, test2: 'testString', test3: 123 }
    expect(queryStringify(data)).toBe('?test=[object Object]&test2=testString&test3=123')
  })

  test('queryStringify wrong input - string', () => {
    const data = 'wrongInput'
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow(Error)
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow('Data must be object')
  })

  test('queryStringify wrong input - null', () => {
    const data = null
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow(Error)
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow('Data must be object')
  })

  test('queryStringify wrong input - undefined', () => {
    const data = undefined
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow(Error)
    // @ts-expect-error
    expect(() => { queryStringify(data) }).toThrow('Data must be object')
  })
})
