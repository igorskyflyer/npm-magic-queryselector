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

**Create a `d.ts` file**

<br>

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

**Add a code snippet**

<br>

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

If you want to use it with JavaScript, you don't need to do anything besides installing the package.

<br>

> [!NOTE]
> TypeScript server sometimes likes to play games, if the patch doesn't work immediately please restart TypeScript server or Visual Studio Code.
>

---

## ✨ Example

`main.js`
```js
const video = document.querySelector('div#app > video') // HTMLVideoElement | null

const videos = document.querySelectorAll('div#app > video') // NodeListOf<HTMLVideoElement>

video?.src; // now we can access all <video> properties and methods
videos[0].src; // 😀😀😀
```

---

## 🤖 Support

This patch extends the default TypeScript support by inferring the types from the input selectors passed to `querySelector()` / `querySelectorAll()`.

<br>

Here's a table showing which selectors are supported along with the return types for the given examples.

| Selector | Example | Compatibility | Implementation | Note |
|:---:|:---:|:---:|:---:|:---:|
| Descendant | div video | ✅ | Patched | Returns the type of the selected element, `HTMLVideoElement`. <br><br> Warning: inferring is very sensitive, the selector must follow the syntax: `parent > child`, with one space before and after the `>`. |
| Child | main > a, div#app > video | ✅ | Patched | Returns the type of the selected element, `HTMLAnchorElement` / `HTMLVideoElement`. |
| Type + ID | div#app | ✅ | Patched | Returns the type of the selected element, `HTMLDivElement`. |
| Type + Class | a.myLink | ✅ | Patched | Returns the type of the selected element, `HTMLAnchorElement`. |
| Universal | * | ✅ | Native | Returns `HTMLElement`. |
| Type | h2 | ✅ | Native | Returns the type of the selected element, `HTMLHeadingElement`. |
| Class | .footer | ✅ | Native | Returns `HTMLElement`. |
| ID | #share | ✅ | Native | Returns `HTMLElement`. |
| Attribute | \[type="text"] | ✅ | Native | Returns `HTMLElement`. |

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
