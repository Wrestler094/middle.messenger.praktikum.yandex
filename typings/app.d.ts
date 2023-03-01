declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export interface AppState {
    isLoading: boolean
    user: User | null
    chats: Chat[] | null
    activeChatId: number | null
    messages: Message[] | null
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

  export interface Chat {
    active: boolean
    avatar: string | null
    id: number
    title: string
    last_message: {
      id: number
      time: string
      content: string
      user: User
    }
    created_by: number
    unread_count: number
  }

  export interface Message {
    author: boolean
    chat_id: number
    content: string
    file: null
    id: number
    is_read: boolean
    time: string
    type: string
    user_id: number
  }
}

export {}
