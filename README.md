<h1 align="center">🪄 querySelector(): <code>magic</code></h1>

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

---

## 🎬 Demonstration

Here's `magic-querySelector` in action.

<br>

https://github.com/user-attachments/assets/eb0b6695-be60-4a6e-b935-5996b40c5d78

<p align="center"><strong>Without</strong> <code>magic-queryselector</code></p>

<br>
<br>

https://github.com/user-attachments/assets/2251724d-98d7-4deb-8a82-8b4f0a6a6e31

<p align="center"><strong>With</strong> <code>magic-queryselector</code></p>

---

## 🕵🏼 Usage

Install it by executing:

```shell
npm i -D "@igor.dvlpr/magic-queryselector"
```

<br>

Including the `magic-queryselector` into your project depends on the language of it.

Please see the appropriate section for your project.

---

### TypeScript

If you want to use it with TypeScript, you need to do one of the following:

---

**1. method: create a `d.ts` file**


Create a `magic.d.ts` file in the root directory of your project and add the following code:

```ts
import '@igor.dvlpr/magic-queryselector'
```

That's it! 🥳 You're all set up.

<br>

> [!NOTE]
> TypeScript server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript server or Visual Studio Code.
>

---

**2. method: add a code snippet**


Add the code snippet

```ts
import '@igor.dvlpr/magic-queryselector'
```

at the top of your entrypoint/main TypeScript file.

<br>

> [!NOTE]
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

## ✨ Example

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

## 🤖 Support

This patch extends the default TypeScript support by inferring the types from the input selectors passed to `querySelector()` / `querySelectorAll()`.

<br>

Here's a table showing which selectors are supported along with the return types for the given examples.

| Selector / Combinator | Example | Compatibility | Implementation | Before / After |
|:---:|:---:|:---:|:---:|:---:|
| Descendant | `div video` | ✅ | **Patched** | `HTMLElement` / `HTMLVideoElement` |
| Child | `main > a` | ✅ | **Patched** | `HTMLElement` / `HTMLAnchorElement` | |
| Type + ID | `div#app` | ✅ | **Patched** | `HTMLElement` / `HTMLDivElement` | |
| Type + Class | `a.myLink` | ✅ | **Patched** | `HTMLElement` / `HTMLAnchorElement` | |
| Universal | `*` | ✅ | *Native* | `HTMLElement` | |
| Type | `h2` | ✅ | *Native* | `HTMLHeadingElement` | |
| Class | `.footer` | ✅ | *Native* | `HTMLElement` | |
| ID | `#share` | ✅ | *Native* | `HTMLElement` | |
| Attribute | `[title]` | ✅ | *Native* | `HTMLElement` | |

<br>

> [!WARNING]
> Inferring is a very complex and sensitive process, the selectors must follow a strict syntax to get their (return) types inferred, e.g. the child selector **MUST** be written as: `parent > child`, with **EXACTLY** one space *before* and *after* the `>`.
>  
> Failure to do so will infer the type as `HTMLElement`.
> 

<br>

> [!NOTE]
> Read more about [selector structure](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure) and [selectors and combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) on `MDN`.
> 

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

<br>

---

<br>

Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
