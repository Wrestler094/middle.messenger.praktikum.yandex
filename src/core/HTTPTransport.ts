enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type HTTPMethod = (url: string, data?: Record<string, any>) => Promise<unknown>

class HTTPTransport {
  static readonly BASE_URL: string = 'https://ya-praktikum.tech/api/v2/'

  public get: HTTPMethod = async (url, data = {}) => {
    return await this.request(url, data, METHODS.GET)
  }

  public post: HTTPMethod = async (url, data = {}) => {
    return await this.request(url, data, METHODS.POST)
  }

  public put: HTTPMethod = async (url, data = {}) => {
    return await this.request(url, data, METHODS.PUT)
  }

  public delete: HTTPMethod = async (url, data = {}) => {
    return await this.request(url, data, METHODS.DELETE)
  }

  protected request = async (
    url: string,
    data: Record<string, any>,
    method: string,
    timeout = 5000
  ): Promise<unknown> => {
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
      xhr.withCredentials = true

      xhr.onload = function () {
        let responseData
        try {
          responseData = JSON.parse(xhr.response)
        } catch (err) {
          responseData = xhr.response
        }

        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('%cdata recieved', 'background: #222; color: #55dac6', responseData)
          resolve(responseData)
        } else {
          console.error(responseData, xhr.status)
          reject(responseData)
        }
      }

      xhr.onabort = function () {
        console.error(xhr)
        reject(JSON.parse(xhr.response))
      }

      xhr.onerror = function () {
        console.error(xhr)
        reject(JSON.parse(xhr.response))
      }

      xhr.ontimeout = function () {
        console.error(xhr)
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
