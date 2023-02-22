declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  // TODO: chats
  // TODO: active chat
  // TODO: messages
  export interface AppState {
    appIsInited: boolean
    isLoading: boolean
    loginFormError: string | null
    user: User | null
  }

  export interface User {
    avatar: string
    display_name: string
    email: string
    first_name: string
    id: number
    login: string
    phone: string
    second_name: string
  }
}

export {}
