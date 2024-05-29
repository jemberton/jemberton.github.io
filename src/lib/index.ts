//! Whole file needs review
import { Router } from "vue-router"

//@ ============================================================================
//@  Interfaces
//@ ============================================================================
export interface IMarkdownPost {
    title: string
    author?: string
    avatar?: string
    date: string
    email?: string[]
    github?: string[]
    body: string
}

export interface IMarkdownPage {
  body: string
}

//@ ============================================================================
//@  Getters
//@ ============================================================================
export const getFileContents = async (file: string) => {
  if (file !== "") {
    const data = await fetch(file)
    const datavalue = await data.text()
    return datavalue
  }

  return ""
}

//@ ============================================================================
//@  Parsers
//@ ============================================================================
export const parseBlockQuote = (line: string) => {
  if (line.startsWith('>')) {
    let quoteSvg = `<svg class="icon-font3x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>`

    return line.replace(/^\>\s(.+)/, `
      <blockquote class="bg-mantle p-xxl rounded-xs font-retina m-font flex row gap-sm shadow border-thinner border-crust">
        <span class="text-surface1">${ quoteSvg }</span>
        <span class="grow">$1</span>
      </blockquote>
    `)
  }

  return line
}

export const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

// TODO add anchor link and show on hover 
export const parseHeadings = (line: string) => {
    if (line.startsWith('#')) {
        let symbols = line.match(/^\#+/g) || []
        let count = 0

        if (symbols.length > 0) {
            count = (symbols[0]?.match(/#/g) || []).length
            return line.replace(/^#+\s(.*)/g, `<h${ count } class="m-font">$1</h${ count }>`)
        }
    }

    return line
}

export const parseHorizontalRule = (line: string) => {
    if (line.startsWith('---')) {
        return "<hr class='w-100 border-none border-t-thick border-dashed border-mantle m-none p-none my-lg'>"
    }

    return line
}

export const parseImage = () => {
  console.log('lib/index.ts --> parseImage()')
}

export const parseMetadata = (metadata: string[]) => {
    let metadataHTML: IMarkdownPost = {
        title: "",
        author: "",
        avatar: "",
        date: "",
        email: [""],
        github: [""],
        body: ""
    }

    for (const data of metadata) {
        let key = data.trim().split(': ')
        
        if (key.length > 1) {
            switch (key[0]) {
                case "title":
                    metadataHTML.title = key[1]
                    break
                case "author":
                    metadataHTML.author = key[1]
                    break
                case "avatar":
                    metadataHTML.avatar = key[1]
                    break
                case "date":
                    metadataHTML.date = parseDate(parseInt(key[1]))
                    break
                case "email":
                    let emailData = key[1].split(' ')
                    metadataHTML.email = emailData
                    break
                case "github":
                    let githubData = key[1].split(' ')
                    metadataHTML.github = githubData
                    break
                default: break
            }
        }
    }

    return metadataHTML
}

export const parseParagraphs = (line: string) => {
  if (line !== '') {
    return `<p class="m-font mb-xxl justify-text">${ line }</p>`
  }

  return line
}

//@ ============================================================================
//@  Automations
//@ ============================================================================
export const parse = async (file: string, hasMetadata: boolean = false) => {
  let newHTMLArray = []

  let fileContents = await getFileContents(file)
  let markdown = ""
  
  let lines = fileContents.split('\n')

  for (const [index, line] of lines.entries()) {
    let newline = ""

    if (hasMetadata && index === 0) {
      console.log('parse with metadata')
    } else {
      console.log('parse without metadata')
    }

    //# Process each line
    //# Check for "startsWith" triggers
    let isHeading = parseHeadings(line)
    if (isHeading !== line) { newline = isHeading }

    let isBlockQuote = parseBlockQuote(line)
    if (isBlockQuote !== line) { newline = isBlockQuote }

    let isHorizontalRule = parseHorizontalRule(line)
    if (isHorizontalRule !== line) { newline = isHorizontalRule }

    //# Check for paragraphs
    if (newline === "" && line !== "") { newline = parseParagraphs(line) }

    //# Check for inline triggers
    newline = newline.replace(/\*\*([a-zA-Z0-9_\s-]+?)\*\*/g, '<strong>$1</strong>')
    newline = newline.replace(/\*([a-zA-Z0-9_\s-]+?)\*/g, `<em>$1</em>`)

    //# Add to HTML array
    if (newline !== "") { newHTMLArray.push(newline) }
  }

  //# TODO build line and add to array
  markdown = newHTMLArray.join("")

  return markdown
}


// TODO Review this and look to improve 
// NOTE This function replaces dynamically generated HTML and adds in an onclick listener that extends vue-router-link 
export const linkify = (element: HTMLElement, router: Router) => {
    const links = element.getElementsByTagName('a')
  
    Array.from(links).forEach((link: HTMLAnchorElement) => {
      if (link.hostname == window.location.hostname && link.classList.contains('router')) {
        // ignore if onclick is already set
        // e.g. RouterLink
        if (link.onclick) {
          return
        }
  
        link.onclick = (event: MouseEvent) => {
          const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event
          // ignore with control keys
          if (metaKey || altKey || ctrlKey || shiftKey) {
            return
          }
  
          // ignore when preventDefault called
          // e.g. if it's a router-link
          if (defaultPrevented) {
            return
          }
  
          // ignore right clicks
          if (button !== undefined && button !== 0) {
            return
          }
  
          // ignore if `target="_blank"`
          const linkTarget = link.getAttribute('target')
          if (linkTarget && /\b_blank\b/i.test(linkTarget)) {
            return
          }
  
          let url = null
          try {
            url = new URL(link.href)
          } catch (err) {
            return
          }
  
          const to = url.pathname
          // ignore same page links with anchors
          if (url.hash && window.location.pathname === to) {
            return
          }
  
          event.preventDefault()
          router.push(to)
        }
      } else {
        link.innerHTML = `
          <span class="flex-inline align-center gap-xxs">
            ${ link.innerText }
            <svg class="icon-sm" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
          </span>
        `

        link.onclick = (event: MouseEvent) => {
          event.preventDefault()

          window.open(link.href, '_blank')
          // window.location.href = link.href
        }
      }
    })
  }
