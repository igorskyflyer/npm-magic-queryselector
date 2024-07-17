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
  Input extends `${infer FirstSelector} ${infer SecondSelector}`
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

type SelectorTagId<K extends string> = K extends `${infer Tag}#${infer _Id}`
  ? Tag extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Tag]
    : HTMLElement
  : never

// TODO: implement all selectors (???)
// https://drafts.csswg.org/selectors/
type QuerySelector<Input extends string> =
  Input extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Input]
    : CombinatorChild<Input> extends never
      ? CombinatorDescendant<Input> extends never
        ? SelectorTagClass<Input> extends never
          ? SelectorTagId<Input> extends never
            ? HTMLElement
            : SelectorTagId<Input>
          : SelectorTagClass<Input>
        : CombinatorDescendant<Input>
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
