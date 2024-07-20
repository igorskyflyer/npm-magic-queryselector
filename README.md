<h1 align="center">querySelector( 🪄 )</h1>

<br>

<p align="center">
	🪄 A TypeScript-types patch for <code>querySelector()</code> / <code>querySelectorAll()</code>, make them return types you expect them to! 🔮
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Demonstration](#-demonstration)
- [Usage](#-usage)
  - [TypeScript](#typescript)
	  - [Create a d.ts file](#create-a-dts-file-recommended)
	  - [Add to the entrypoint](#add-to-the-entrypoint)
  - [JavaScript](#javascript)
- [Implementation](#-implementation)
  - [API status table](#implementation-table)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

<br>
<br>

## 🎬 Demonstration

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

---

## 🕵🏼 Usage

Install it by executing:

```shell
npm i -D "@igor.dvlpr/magic-queryselector"
```

<br>

Including the `magic-queryselector` into your project depends on the language of it.

Please see the appropriate section for your project:

- [TypeScript](#typescript)
- [JavaScript](#javascript)

---

### TypeScript

If you want to use it with TypeScript, you need to copy the following code

```ts
import '@igor.dvlpr/magic-queryselector'
```

and then do one of the following:

<br>

**\[ 1st option ]**
#### Create a `d.ts` file (*recommended*)

<br>

> [!WARNING]
> This method requires a valid `tsconfig.json` file to be present in the root of your project.
>

<br>

Create a `magic.d.ts` file in the root directory of your project and add the snippet you copied:

<br>

`magic.d.ts`
```ts
import '@igor.dvlpr/magic-queryselector'
```

<br>

That's it! 🥳 You're all set up.

<br>

> [!TIP]
> TypeScript server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript server or Visual Studio Code.
>

---

<br>

**\[ 2nd option ]**
#### Add to the entrypoint


Add the code snippet you copied to the top of your entrypoint/main TypeScript file.

<br>

`index.ts`
```ts
import '@igor.dvlpr/magic-queryselector'
```

<br>

> [!TIP]
> TypeScript server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript server or Visual Studio Code.
>

---

### JavaScript


<br>

> [!TIP]
> If you want to use it with JavaScript, you don't need to do anything besides installing the package.
>

<br>

> [!NOTE]
> TypeScript server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript server or Visual Studio Code.
>

---

## 🤖 Implementation

This patch extends the default (*return*) type inference of TypeScript by inferring the types from the input `string` containing selectors/combinators passed to `querySelector()` / `querySelectorAll()`.

<br>

> [!NOTE]
> Read more about [selector structure](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) and [selectors and combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) on `MDN`.
>

<br>

> [!NOTE]
> `querySelector()` will return the type listed in the table below, e.g. `HTMLDivElement`, while `querySelectorAll()` will return `NodeListOf<T>` of the same type, e.g. `NodeListOf<HTMLDivElement>`.
>
> For brevity this table only shows the types for `querySelector()`.
>
> Read more about TypeScript's implementation of the [types for `querySelector()` and `querySelectorAll()`](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html#the-queryselector-and-queryselectorall-methods) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg).
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

<div align="center"><em><strong>Table 1.</strong> implementation table</em></div>

<br>
<br>

***(1)*** The column combinator is a highly-experimental upcoming combinator *"that is placed between two CSS selectors. It matches only those elements matched by the second selector that belong to the column elements matched by the first."* (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator) <img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg" alt="An external link" width="12" height="12">)

<br>

---

## ✨ Examples

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

---

## 📝 Changelog

> 📑 Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-magic-queryselector/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-magic-queryselector/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings.. 🪀_

<br>

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>

[@igor.dvlpr/node-clone-js](https://www.npmjs.com/package/@igor.dvlpr/node-clone-js)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

---

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
