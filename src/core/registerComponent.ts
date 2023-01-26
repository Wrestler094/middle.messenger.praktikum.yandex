import Block from './Block'
import * as Handlebars from 'handlebars'
import { HelperOptions } from 'handlebars'

type BlockConstructable<Props = any> = new(props: Props) => Block

export default function registerComponent<Props> (Component: BlockConstructable<Props>): void {
  Handlebars.registerHelper(Component.name,
    function (this: Props, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
      if (typeof data.root.children !== 'object') {
        data.root.children = {}
      }

      if (typeof data.root.refs !== 'object') {
        data.root.refs = {}
      }

      const { children, refs } = data.root;

      /**
        * Костыль для того, чтобы передавать переменные
        * внутрь блоков вручную подменяя значение
        */
      (Object.keys(hash) as any).forEach((key: keyof Props) => {
        if (this[key] !== undefined && typeof this[key] === 'string') {
          hash[key] = hash[key].replace(new RegExp(`{{S${String(key)}}}`, 'i'), this[key])
        }
      })

      const component = new Component(hash)

      children[component.id] = component

      if (ref !== undefined) {
        refs[ref] = component
      }

      const contents = typeof fn === 'function' ? fn(this) : ''

      return `<div data-id="${component.id}">${contents}</div>`
    })
}
