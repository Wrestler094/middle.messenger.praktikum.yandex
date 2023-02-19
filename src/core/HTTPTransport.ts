enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface Options {
  method: METHODS
  data?: any
  timeout?: number
}

type OptionsWithoutMethod = Omit<Options, 'method'>
type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>

class HTTPTransport {
  static readonly BASE_URL: string = 'https://ya-praktikum.tech/api/v2/'

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
    const { method, data } = options
    const fullUrl = HTTPTransport.BASE_URL + url

    return await new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(
        method,
        isGet && (Boolean(data))
          ? `${fullUrl}${queryStringify(data)}`
          : fullUrl
      )

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json')
      }

      xhr.timeout = timeout

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log(xhr)
          resolve(xhr.response)
        } else {
          console.log(xhr)
          reject(JSON.parse(xhr.response))
        }
      }

      xhr.onabort = function () {
        console.log(xhr)
        reject(JSON.parse(xhr.response))
      }

      xhr.onerror = function () {
        console.log(xhr)
        reject(JSON.parse(xhr.response))
      }

      xhr.ontimeout = function () {
        console.log(xhr)
        reject(JSON.parse(xhr.response))
      }

      if (!isGet && (Boolean(data))) {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data))
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

export default new HTTPTransport()
