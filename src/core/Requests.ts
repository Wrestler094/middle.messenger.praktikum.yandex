enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface Options {
  headers?: Record<string, string>
  method: METHODS
  data?: any
  timeout?: number
}

type OptionsWithoutMethod = Omit<Options, 'method'>
type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>

export default class HTTPTransport {
  public get: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: METHODS.GET }, options.timeout)
  }

  public post: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  public put: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  public delete: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  protected request = async (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options

    return await new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(
        method,
        isGet && (Boolean(data))
          ? `${url}${queryStringify(data)}`
          : url
      )

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (!isGet && (Boolean(data))) {
        xhr.send(data)
      } else {
        xhr.send()
      }
    })
  }
}

function queryStringify (data: Record<string, unknown>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  // Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data)
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${String(data[key])}${index < keys.length - 1 ? '&' : ''}`
  }, '?')
}