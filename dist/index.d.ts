// Author: Igor Dimitrijević (@igorskyflyer)

type CombinatorChild<Input extends string> =
  Input extends `${infer _Parent}> ${infer Child}`
    ? Child extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Child]
      : HTMLElement
    : Input extends `${infer _Parent}>${infer Child}`
      ? Child extends keyof HTMLElementTagNameMap
        ? HTMLElementTagNameMap[Child]
        : HTMLElement
      : never

type CombinatorDescendant<Input extends string> =
  Input extends `${infer _FirstSelector} ${infer SecondSelector}`
    ? SecondSelector extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[SecondSelector]
      : HTMLElement
    : never

type SelectorTagClass<Input extends string> =
  Input extends `${infer Tag}.${infer _ClassName}`
    ? Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
    : never

type SelectorTagId<Input extends string> =
  Input extends `${infer Tag}#${infer _Id}`
    ? Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
    : never

type SelectorTagAttribute<Input extends string> =
  Input extends `${infer Tag}[${infer _Attribute}]`
    ? Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
    : never

type CombinatorNextSiblingTag<Input extends string> =
  Input extends `${infer _First}+ ${infer Tag}`
    ? Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
    : Input extends `${infer _First}+${infer Tag}`
      ? Tag extends keyof HTMLElementTagNameMap
        ? HTMLElementTagNameMap[Tag]
        : HTMLElement
      : never

// TODO: implement all selectors (???)
// General Sibling Combinator
// Syntax: element ~ sibling
// Example: h1 ~ p
// https://www.w3.org/TR/selectors-4/
type QuerySelector<Input extends string> =
  Input extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Input]
    : CombinatorChild<Input> extends never
      ? CombinatorNextSiblingTag<Input> extends never
        ? CombinatorDescendant<Input> extends never
          ? SelectorTagClass<Input> extends never
            ? SelectorTagId<Input> extends never
              ? SelectorTagAttribute<Input> extends never
                ? HTMLElement
                : SelectorTagAttribute<Input>
              : SelectorTagId<Input>
            : SelectorTagClass<Input>
          : CombinatorDescendant<Input>
        : CombinatorNextSiblingTag<Input>
      : CombinatorChild<Input>

declare global {
  interface Document {
    querySelector<K extends string>(selectors: K): QuerySelector<K> | null
    querySelectorAll<K extends string>(
      selectors: K
    ): NodeListOf<QuerySelector<K>>
  }

  interface Element {
    querySelector<K extends string>(selectors: K): QuerySelector<K> | null
    querySelectorAll<K extends string>(
      selectors: K
    ): NodeListOf<QuerySelector<K>>
  }
}

export {}
