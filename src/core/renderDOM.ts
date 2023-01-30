import Block from './Block'

export default function renderDOM (block: Block): void {
  const root = document.querySelector('#app')

  if (root != null) {
    root.innerHTML = ''
    root.appendChild(block.getContent())
  } else {
    throw new Error('Root элемент не найден!')
  }
}
