const appDiv = document.querySelector('div#app') // HTMLDivElement | null
// only one element is allowed per ID

if (appDiv) {
  const video = document.querySelector('div#app>video') // HTMLVideoElement | null
  const videos = document.querySelectorAll('div#app > video') // NodeListOf<HTMLVideoElement>

  video?.src // 😀😀😀
  videos[0].src // 😀😀😀

  const link = document.querySelector('a.link') // HTMLAnchorElement | null
  const links = document.querySelectorAll('a.link') // NodeListOf<HTMLAnchorElement>

  link?.href
  links[0].href

  const submitButton = appDiv.querySelector('button#submit') // HTMLButtonElement | null
  const submitButtons = appDiv.querySelectorAll('button#submit') // NodeListOf<HTMLButtonElement>

  submitButton?.form
  submitButtons[0].form

  const form = appDiv.querySelector('div > form') // HTMLFormElement | null
  const forms = appDiv.querySelectorAll('div > form') // NodeListOf<HTMLFormElement>

  form?.action
  forms[0].method

  const input = appDiv.querySelector('div input') // HTMLInputElement | null
  const inputs = appDiv.querySelectorAll('div input') // NodeListOf<HTMLInputElement>

  input?.placeholder
  inputs[0].placeholder
}

const inputWithAttribute = document.querySelector('input[type=text]') // HTMLInputElement  | null

const a = document.querySelector('div[href]') // HTMLDivElement | null
const b = document.querySelector('h1 + p') // HTMLParagraphElement | null
const c = document.querySelector('h1 ~ p') // still not implemented
