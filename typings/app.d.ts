declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  // TODO: contacts[]
  // TODO: messages[]
  export interface AppState {
    isLoading: boolean
    user: User | null
    chats: [] | null
    activeChatId: number | null
    messages: [] | null
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
