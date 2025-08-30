<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-magic-queryselector/main/media/magic-queryselector.png" alt="Icon of Magic querySelector" width="256" height="256">
  <h1>Magic querySelector</h1>
</div>

<br>

<h4 align="center">
  🪄 A TypeScript-types patch for <code>querySelector()</code> / <code>querySelectorAll()</code>, make them return types you expect them to! 🔮
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
  - [TypeScript](#typescript)
    - [Create a d.ts file](#create-a-dts-file-recommended)
    - [Add to the entrypoint](#add-to-the-entrypoint)
  - [JavaScript](#javascript)
- [API](#-api)
  - [Implementation table](#implementation-table)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🧠 Smart IntelliSense - auto‑suggests valid `CSS selectors` and infers exact element types
- 📌 Works with literal selector strings to power IntelliSense
- 🪄 Type‑driven safety - catches invalid selectors at compile time in TypeScript
- 🏷 Tag name mapping - resolves HTML tag names to their correct HTMLElement types
- 🎯 Selector parsing - supports `tag`, `class`, `ID`, and `attribute` selectors in type space
- 🔗 Combinator awareness - understands `descendant`, `child`, `sibling`, and `column combinators`
- 🌱 Pseudo‑class support - recognizes `:root` and maps it to the `<html>` element type
- 📜 Global augmentation - extends `Document` and `Element` to return precise types for `querySelector`/`querySelectorAll`
- ⚡ Zero runtime cost - all logic is purely in TypeScript types, no JS overhead

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/magic-queryselector
```

```bash
yarn add @igorskyflyer/magic-queryselector
```

```bash
npm i @igorskyflyer/magic-queryselector
```

<br>
<br>

Here's `magic-querySelector` in action.

<br>

https://github.com/user-attachments/assets/eb0b6695-be60-4a6e-b935-5996b40c5d78

<div align="center">
  <strong>Without</strong> <code>magic-queryselector</code>
</div>

<br>
<br>

https://github.com/user-attachments/assets/2251724d-98d7-4deb-8a82-8b4f0a6a6e31

<div align="center">
  <strong>With</strong> <code>magic-queryselector</code>
</div>

<br>
<br>

<blockquote align="center">Visual Studio Code theme used in the demonstration is <a href="https://marketplace.visualstudio.com/items?itemName=igordvlpr.kai-theme"><code>Kai 🌊</code></a> <img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg" alt="An external link" width="12" height="12">.</blockquote>

<br>

Including the `magic-queryselector` into your project depends on the language of it. Please see the appropriate section for your project:

- [TypeScript](#typescript)
- [JavaScript](#javascript)

---

### TypeScript

If you want to use it with TypeScript, you need to import this module. This augments the global `Document` and `Element` interfaces so `querySelector()` and `querySelectorAll()` return the correct element type based on your selector.

To do so, copy the following code:

```ts
import '@igorskyflyer/magic-queryselector'
```

and then do one of the either options:

<br>

**\[ 1st option ]**
#### Create a `d.ts` file (*recommended*)

<br>

> ### ⚠️ WARNING
>
> This method requires a valid `tsconfig.json` file to be present in the root of your project.
>

<br>

Create a `magic.d.ts` file in the root directory of your project and add the snippet you copied:

<br>

`magic.d.ts`
```ts
import '@igorskyflyer/magic-queryselector'
```

<br>

That's it! You're all set up. 🥳

<br>

> ### 💡 TIP
>
> #### Language server
>
> TypeScript's language server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript language server or Visual Studio Code.
>

---

<br>

**\[ 2nd option ]**
#### Add to the entrypoint


Add the code snippet you copied to the top of your entrypoint/main TypeScript file.

<br>

`index.ts`
```ts
import '@igorskyflyer/magic-queryselector'
```

<br>

> ### 💡 TIP
>
> #### Language server
>
> TypeScript's language server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript language server or Visual Studio Code.
>

---

### JavaScript


<br>

> ### ℹ️ NOTE
>
> #### Easy install
>
> If you want to use it with JavaScript, you don't need to do anything besides installing the package.
>

<br>

> ### 💡 TIP
>
> #### Language server
>
> TypeScript's language server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript language server or Visual Studio Code.
>

<br>
<br>

## 🤹🏼 API

This patch extends the default (*return*) type inference of TypeScript by inferring the types from the input `string` containing selectors/combinators passed to `querySelector()` / `querySelectorAll()`.

<br>

> ### ℹ️ NOTE
>
> #### API behavior
>
> `querySelector()` will return the type listed in the table below, e.g. `HTMLDivElement`, while `querySelectorAll()` will return `NodeListOf<T>` of the same type, e.g. `NodeListOf<HTMLDivElement>`.
>
> **Unsupported or unrecognised selectors** will gracefully fall back to the generic `HTMLElement` type, ensuring your code still type‑checks while signalling that no specific element type could be inferred.
>
> For brevity this table only shows the types for `querySelector()`.
>
> Read more about [selector structure](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) and [selectors and combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) on `MDN`.
>

<br>

The following table shows which selectors/combinators are supported along with the inferred return types for the given examples.

<br>

##### Implementation table
|Selector/Combinator |Example      |Compatibility | Inference   |Before/After                    |
|:------------------:|:-----------:|:------------:|:-----------:|:------------------------------:|
|Type + ID           |`div#app`    | ✅           | **Patched** |`Element`/`HTMLDivElement`      |
|Type + Class        |`a.myLink`   | ✅           | **Patched** |`Element`/`HTMLAnchorElement`   |
|Type + Attribute    |`a[title]`   | ✅           | **Patched** |`Element`/`HTMLAnchorElement`   |
|Descendant          |`div video`  | ✅           | **Patched** |`Element`/`HTMLVideoElement`    |
|Child               |`main > a`   | ✅           | **Patched** |`Element`/`HTMLAnchorElement`   |
|Next-sibling        |`div + span` | ✅           | **Patched** |`Element`/`HTMLSpanElement`     |
|Subsequent-sibling  |`h1 ~ pre`   | ✅           | **Patched** |`Element`/`HTMLPreElement`      |
|Pseudo-class :root  |`:root`      | ✅           | **Patched** |`Element`/`HTMLHtmlElement`     |
|Column (1)          |`col \|\| td`| ✅           | **Patched** |`Element`/`HTMLTableCellElement`|
|Universal           |`*`          | &mdash;      | *Native*    |`Element`/`Element`             |
|Type                |`li`         | &mdash;      | *Native*    |`HTMLLIElement`/`HTMLLIElement` |
|ID                  |`#share`     | &mdash;      | *Native*    |`Element`/`Element`             |
|Class               |`.footer`    | &mdash;      | *Native*    |`Element`/`Element`             |
|Attribute           |`[title]`    | &mdash;      | *Native*    |`Element`/`Element`             |
|Unresolved          |`<any>`      | &mdash;      | *Native*    |`Element`/`Element`             |

<div align="center"><em><strong>Table 1.</strong> implementation table</em></div>

<br>
<br>

***(1)*** The column combinator is a highly-experimental upcoming combinator *"that is placed between two CSS selectors. It matches only those elements matched by the second selector that belong to the column elements matched by the first."* (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator) <img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg" alt="An external link" width="12" height="12">)

<br>
<br>

## 🗒️ Examples

`main.js`
```js
const video = document.querySelector('div#app > video') // HTMLVideoElement | null
const audios = document.querySelectorAll('div#app > audio') // NodeListOf<HTMLAudioElement>

if(video) {
  video.src = '<some_URL>' // now we can access all <video> properties and methods
}

if(audios.length > 0) {
  audios[0].src = '<some_URL>' // 😀😀😀
}
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-magic-queryselector/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-magic-queryselector/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings.. 🪀_

<br>

[@igorskyflyer/unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igorskyflyer/duoscribi](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>

[@igorskyflyer/clone](https://www.npmjs.com/package/@igorskyflyer/clone)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
