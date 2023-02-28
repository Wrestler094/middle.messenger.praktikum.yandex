import { Block } from 'core'

export default function renderDOM (rootQuery: string, block: Block<any>): void {
  const root = document.querySelector(rootQuery)

  if (root != null) {
    root.innerHTML = ''
    root.appendChild(block.getContent())
  } else {
    throw new Error('Root элемент не найден!')
  }
}
