// Author: Igor Dimitrijević (@igorskyflyer)

import { expectTypeOf } from 'expect-type'

// querySelector(:root)
const htmlSingle = document.querySelector('  :root ')

if (htmlSingle) {
  expectTypeOf(htmlSingle).toMatchTypeOf<HTMLHtmlElement>()
}

// querySelectorAll(:root)
const htmlAll = document.querySelectorAll(':root')
expectTypeOf(htmlAll[0]).toMatchTypeOf<HTMLHtmlElement>()

// querySelector(tag.class)
const itemSingle = document.querySelector('   li.item')

if (itemSingle) {
  expectTypeOf(itemSingle).toMatchTypeOf<HTMLLIElement>()
}

// querySelectorAll(tag.class)
const itemAll = document.querySelectorAll('li.items')
expectTypeOf(itemAll[0]).toMatchTypeOf<HTMLLIElement>()

// querySelector(tag#id)
const tagIdSingle = document.querySelector('div#app')

if (tagIdSingle) {
  expectTypeOf(tagIdSingle).toMatchTypeOf<HTMLDivElement>()
}

// no call to querySelectorAll()
// only one element is allowed per ID

// querySelector(tag[attribute])
const imgAttributeSingle = document.querySelector('     img[data-url]')

if (imgAttributeSingle) {
  expectTypeOf(imgAttributeSingle).toMatchTypeOf<HTMLImageElement>
}

// querySelectorAll(tag[attribute])
const imgAttributeAll = document.querySelectorAll('img[data-url]')
expectTypeOf(imgAttributeAll[0]).toMatchTypeOf<HTMLImageElement>()

// querySelector(parent child)
const descendantTagSingle = document.querySelector('div    input')

if (descendantTagSingle) {
  expectTypeOf(descendantTagSingle).toMatchTypeOf<HTMLInputElement>()
}

// querySelectorAll(parent child)
const descendantTagAll = document.querySelectorAll(' div   input')
expectTypeOf(descendantTagAll[0]).toMatchTypeOf<HTMLInputElement>()

// querySelector(parent > child)
const childTagSingle = document.querySelector('   div#app   >    video')

if (childTagSingle) {
  expectTypeOf(childTagSingle).toMatchTypeOf<HTMLVideoElement>()
}

// querySelectorAll(parent > child)
const childTagAll = document.querySelectorAll('div#app  > video')
expectTypeOf(childTagAll[0]).toMatchTypeOf<HTMLVideoElement>()

// querySelector(tag + tag)
const nextSiblingTagSingle = document.querySelector('h1 + p')

if (nextSiblingTagSingle) {
  expectTypeOf(nextSiblingTagSingle).toMatchTypeOf<HTMLParagraphElement>()
}

// querySelectorAll(tag + tag)
const nextSiblingTagAll = document.querySelectorAll('h1+p')
expectTypeOf(nextSiblingTagAll[0]).toMatchTypeOf<HTMLParagraphElement>()

// querySelector(tag ~ tag)
const subsequentSiblingSingle = document.querySelector('h1 ~ pre')

if (subsequentSiblingSingle) {
  expectTypeOf(subsequentSiblingSingle).toMatchTypeOf<HTMLPreElement>()
}

// querySelectorAll(tag ~ tag)
const subsequentSiblingAll = document.querySelectorAll('h1 ~ pre')
expectTypeOf(subsequentSiblingAll[0]).toMatchTypeOf<HTMLPreElement>()

// querySelector(tag || tag)
const columnSingle = document.querySelector('table ||   td')

if (columnSingle) {
  expectTypeOf(columnSingle).toMatchTypeOf<HTMLTableCellElement>()
}

// querySelectorAll(tag || tag)
const columnAll = document.querySelectorAll('  table  ||td')
expectTypeOf(columnAll[0]).toMatchTypeOf<HTMLTableCellElement>()
