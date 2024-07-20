// Author: Igor Dimitrijević (@igorskyflyer)

import type { Trim } from '@igor.dvlpr/common-types'

// TODO: implement all selectors (???)
// https://www.w3.org/TR/selectors-4/

// Utitlity types
type TagNameToHTMLElement<TagName extends string> =
  TagName extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[TagName]
    : HTMLElement

type InferTagName<Input extends string> = Input extends string
  ? TagNameToHTMLElement<Trim<Input>>
  : never

// Pseudo classes
type PseudoRoot<Input extends string> = Input extends string
  ? Trim<Input> extends ':root'
    ? HTMLElementTagNameMap['html']
    : never
  : never

// Selectors
type DoSelector<
  Input extends string,
  Selector extends string
> = Trim<Input> extends `${infer Tag}${Selector}${infer _Rest}`
  ? InferTagName<Tag>
  : never

type SelectorTagClass<Input extends string> = DoSelector<Input, '.'>
type SelectorTagId<Input extends string> = DoSelector<Input, '#'>

type SelectorTagAttribute<Input extends string> =
  Input extends `${infer Tag}[${infer _Attribute}]` ? InferTagName<Tag> : never

// Combinators
type DoCombinator<
  Input extends string,
  Selector extends string
> = Trim<Input> extends `${infer _Ignored}${Selector}${infer Element}`
  ? InferTagName<Element>
  : never

type CombinatorDescendant<Input extends string> = DoCombinator<Input, ' '>
type CombinatorChild<Input extends string> = DoCombinator<Input, '>'>
type CombinatorNextSiblingTag<Input extends string> = DoCombinator<Input, '+'>
type CombinatorSubsequentSiblingTag<Input extends string> = DoCombinator<
  Input,
  '~'
>
type CombinatorColumnTag<Input extends string> = DoCombinator<Input, '||'>

export type QuerySelector<Input extends string> =
  Input extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Input]
    : PseudoRoot<Input> extends string
      ? CombinatorChild<Input> extends string
        ? SelectorTagClass<Input> extends string
          ? SelectorTagId<Input> extends string
            ? SelectorTagAttribute<Input> extends string
              ? CombinatorSubsequentSiblingTag<Input> extends string
                ? CombinatorNextSiblingTag<Input> extends string
                  ? CombinatorColumnTag<Input> extends string
                    ? CombinatorDescendant<Input> extends string
                      ? HTMLElement
                      : CombinatorDescendant<Input>
                    : CombinatorColumnTag<Input>
                  : CombinatorNextSiblingTag<Input>
                : CombinatorSubsequentSiblingTag<Input>
              : SelectorTagAttribute<Input>
            : SelectorTagId<Input>
          : SelectorTagClass<Input>
        : CombinatorChild<Input>
      : PseudoRoot<Input>

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
