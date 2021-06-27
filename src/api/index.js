import config from './config.json'

/**
 * @param {object} param0
 * @param {string} param0.endpoint - where will be called the API.
 * @param {string} param0.method - the http method.
 * @param {boolean} [param0.requireAuth=true] - need to be logged in?
 * @param {object} param0.data - the data to be included in the request.
 */
export async function callApi ({ endpoint, method = 'GET', requireAuth = true, data = null, token = null }) {
  const headers = new window.Headers()
  headers.append('Content-Type', 'application/json')

  if (requireAuth) {
    if (!token) {
      return {
        success: false,
        errors: 'User is not authenticated'
      }
    }
    headers.append('Authorization', `Bearer: ${token}`)
  }

  const credentials = {
    method: method,
    headers: headers,
    mode: 'cors',
    cache: 'default'
  }

  if (data && method !== 'GET') credentials.body = JSON.stringify(data)

  try {
    const request = await window.fetch(config.url + endpoint, credentials)
    if (!request.ok) throw request;
    return await request.json()
  } catch (error) {
    return {
      success: false,
      error: error.statusText,
    }
  }
}

// Auth
export class Auth {
  static async signUp (data) {
    return await callApi({
      endpoint: '/signup',
      method: 'POST',
      requireAuth: false,
      data: data,
    });
  }

  static async login (email, password) {
    return await callApi({
      endpoint: '/login',
      method: 'POST',
      requireAuth: false,
      data: { email, password }
    });
  }

  static async refreshToken (token) {
    return await callApi({
      endpoint: `/refresh/${token}`,
      method: 'GET',
      requireAuth: false,
    });
  }

  static logout () {
    window.localStorage.removeItem('refreshToken')
  }
}

const global = {
  Auth, callApi,
}

export default global;